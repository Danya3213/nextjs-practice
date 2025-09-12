"use client";
import {type PropsWithChildren, type ReactNode, useEffect, useState} from "react";
import {useTokenService} from "@api/tokenServices";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import {useRouter} from "next/navigation";
import type {IUserContext} from "@/interfaces/UserContext";
import {Loading} from "@Components/Modals/Loading/Loading";

export const AuthGuardProvider = ({children}: PropsWithChildren): ReactNode | null => {

    const {checkToken} = useTokenService();
    const {isLoggedIn}: IUserContext = useUserInfo();
    const router = useRouter();
    const [ returned, setReturned ] = useState<ReactNode | null>(<body><Loading/></body>);

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
