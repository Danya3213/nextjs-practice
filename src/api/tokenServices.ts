"use client"

import {useUserInfo} from "@hooks/useUserInfo.hook";
import axios, {type AxiosInstance} from "axios";
import {useServiceLayout} from "./serviceLayout";
import {useRouter} from "next/navigation";

export function useTokenService () {

    const router = useRouter();
    const goToPage = (v: string): void => {
        router.replace(v);
    };
    const {setIsLoggedIn, setName} = useUserInfo();
    const authAPI = `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`;
    const {isResOk} = useServiceLayout();
    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`,
        withCredentials: true,
    })

    const checkToken = async () => {
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
        }
    };


    return {
        checkToken,
    }
}