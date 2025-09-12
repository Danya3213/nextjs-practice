import axios, {type AxiosInstance} from "axios";
import {useRouter} from "next/navigation";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import {useAuthValuesContext} from "@notAuthPages/auth/hooks/useAuthValues";
import {useInputService} from "@notAuthPages/auth/services/inputService";
import {useServiceLayout} from "./serviceLayout";
import type {IUserContext} from "@/interfaces/UserContext";
import type {AuthValuesContextI} from "@notAuthPages/auth/interfaces/authContext.interface";
import type {IInputService} from "@notAuthPages/auth/interfaces/inputService.interface";
import type {IServiceLayout} from "@/interfaces/serviceLayout.interface";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type {IAuthService} from "@notAuthPages/auth/interfaces/AuthService.interface";

export function useAuthService (): IAuthService {

    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`,
    })

    const {setIsLoggedIn, setName}:IUserContext = useUserInfo();
    const router: AppRouterInstance = useRouter();
    const goToPage = (v: string): void => {
        router.replace(v);
    };

    const {values}:AuthValuesContextI = useAuthValuesContext();
    const {resetAll}:IInputService = useInputService();
    const {serviceLayout, isResOk}: IServiceLayout = useServiceLayout();

    const authFetch = async (haveAccount: boolean, propCallback = (): void => {}): Promise<void> => {

        await serviceLayout(async () => {

            const { name, email, password } = values;
            const endpoint = haveAccount ? "/login" : "/reg";
            const body = haveAccount ? { email, password } : { email, password, username: name.toLowerCase() };

            await authApi.post(endpoint, body).then((res) => {
                if (isResOk(res)) {
                    goToPage("/");
                    resetAll();
                    propCallback();
                    setIsLoggedIn(true);
                    setName(res.data.username);
                }
            })
        })
    }

    const login = async (resOkCallback = ():void => {}): Promise<void> => {

        await authFetch(true, resOkCallback);
    }

    const registration = async (resOkCallback = ():void => {}): Promise<void> => {

        await authFetch(false, resOkCallback);
    }

    const logout = async (): Promise<void> => {

        await serviceLayout(async (): Promise<void> => {

            await authApi.get('/logout').then((res) => {
                if (isResOk(res)) {

                    goToPage("/auth");
                    setIsLoggedIn(false);
                    setName("");
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