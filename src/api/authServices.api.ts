"use client"

import axios, {type AxiosInstance} from "axios";
import {useRouter} from "next/navigation";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import {useAuthValuesContext} from "@notAuthPages/auth/hooks/useAuthValues.hook";
import {useInputService} from "@notAuthPages/auth/services/inputService.service";
import {useServiceLayout} from "./serviceLayout.api";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ROUTES} from "@constants/routes.const";
import {devConsole} from "@devConsole";
import {useNotification} from "@hooks/useNotification";
import {ENotificationType} from "@/enums/notificationsType.enum";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";
import type {IInputService} from "@notAuthPages/auth/interfaces/inputService.interface";
import type {IServiceLayout} from "@/interfaces/serviceLayout.interface";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type {IAuthService} from "@notAuthPages/auth/interfaces/authService.interface"
import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";
import type {INotificationContext} from "@/interfaces/notificationContext.interface";

export function useAuthService (): IAuthService {

    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEST_URL}/auth`,
        withCredentials: true,
    })

    const {createNotification}: INotificationContext = useNotification();
    const {setIsLoggedIn, setName}:IUserContext = useUserInfo();
    const router: AppRouterInstance = useRouter();
    const goToPage = (v: string): void => {
        router.replace(v);
    };

    const {values}:IAuthValuesContext = useAuthValuesContext();
    const {resetAll}:IInputService = useInputService();
    const {serviceLayout, isResOk}: IServiceLayout = useServiceLayout();

    const authFetch = async (haveAccount: boolean, propCallback = (): void => {}): Promise<void> => {

        await serviceLayout(async (): Promise<void> => {

            const { username, email, password }: IInputs<string> = values;
            const endpoint: "/login" | "/reg" = haveAccount ? "/login" : "/reg";
            const body: {
                [EField.username]?: string,
                [EField.email]: string,
                [EField.password]: string,
            } = haveAccount ? { email: email.trim(), password: password.trim() } : { email: email.trim(), password: password.trim(), username: username.trim().toLowerCase() };

            await authApi.post(endpoint, body).then((res) => {
                if (isResOk(res)) {
                    goToPage(ROUTES.TRANSACTIONS);
                    resetAll();
                    propCallback();
                    setIsLoggedIn(true);
                    setName(res.data.username);

                    if (!res.data.isComfirmed) {

                        createNotification(ENotificationType.warning, "Please, confirm your email");
                    }
                }
            }).catch((err) => {
                if (haveAccount) {

                    createNotification(ENotificationType.error, err.response.data.message);
                    devConsole.error("login failed");

                } else {

                    createNotification(ENotificationType.error, err.response.data.message);
                    devConsole.error("registration failed")
                }
            });
        })
    }

    const login = async (resOkCallback = ():void => {}): Promise<void> => {

        devConsole.log("Logging in...");
        await authFetch(true, () => {
            createNotification(ENotificationType.success, "Logged in");
            resOkCallback()
            devConsole.log("Logged in");
        });
    }

    const registration = async (resOkCallback = ():void => {}): Promise<void> => {

        devConsole.log("Registering...");
        await authFetch(false, () => {
            createNotification(ENotificationType.success, "Registered");
            resOkCallback()
            devConsole.log("Registered");
        });
    }

    const logout = async (resOkCallback = ():void => {}): Promise<void> => {

        devConsole.log("Logging out...");

        await serviceLayout(async (): Promise<void> => {

            await authApi.get('/logout').then((res) => {
                if (isResOk(res)) {

                    goToPage(ROUTES.AUTH);
                    setIsLoggedIn(false);
                    setName("");
                    devConsole.log("Logged out");
                    createNotification(ENotificationType.success, "Logged out");
                    resOkCallback();
                }
            })
        })
    }

    return {
        login,
        registration,
        logout
    }
}