"use client";
import {type PropsWithChildren, type ReactNode, useEffect, useState} from "react";
import {useTokenService} from "@api/tokenServices.api";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import {useRouter} from "next/navigation";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {ITokenService} from "@/interfaces/tokenService.interface";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const AuthGuardProvider = ({children}: PropsWithChildren): ReactNode => {

    const {checkToken}: ITokenService = useTokenService();
    const {isLoggedIn}: IUserContext = useUserInfo();
    const router: AppRouterInstance = useRouter();
    const [ returned, setReturned ] = useState<ReactNode>(<body></body>);

    useEffect(() => {
        checkToken();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            router.replace("/");
            setReturned(children);
        } else {
            router.replace("/auth");
            setReturned(children);
        }
    }, [isLoggedIn, router]);

    return returned;
};
