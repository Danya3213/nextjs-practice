"use client"

import {useUserInfo} from "@hooks/useUserInfo.hook";
import axios, {type AxiosInstance} from "axios";
import {useServiceLayout} from "./serviceLayout.api";
import {useRouter} from "next/navigation";
import {useResponse} from "@hooks/useResponse.hook";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {IResponseContext} from "@/interfaces/ResponseContext.interface";
import type {IServiceLayout} from "@/interfaces/serviceLayout.interface";
import type {ITokenService} from "@/interfaces/tokenService.interface";

export function useTokenService (): ITokenService {

    const router: AppRouterInstance = useRouter();
    const goToPage = (v: string): void => {
        router.replace(v);
    };
    const {setIsLoggedIn, setName}: IUserContext = useUserInfo();
    const {setIsLoading}: IResponseContext = useResponse();
    const authAPI = `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`;
    const {isResOk}: IServiceLayout = useServiceLayout();
    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`,
        withCredentials: true,
    })

    const checkToken = async (): Promise<void> => {

        setIsLoading(true);

        try {
            const res = await authApi.get(`${authAPI}/check`);

            if (isResOk(res)) {
                setIsLoggedIn(true);
                goToPage("/");
                setName(res.data);
            } else {
                goToPage("/auth");
                setIsLoggedIn(false);
            }
        } catch (error) {
            setIsLoggedIn(false);
            goToPage("/auth");
        } finally {
            setIsLoading(false)
        }
    };


    return {
        checkToken,
    }
}