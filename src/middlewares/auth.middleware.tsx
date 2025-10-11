"use client";
import {useTokenService} from "@api/tokenServices.api";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import {usePathname, useRouter} from "next/navigation";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {ITokenService} from "@/interfaces/tokenService.interface";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {type PropsWithChildren, type ReactElement, useEffect, useState} from "react";

export const AuthGuardProvider = ({children}: PropsWithChildren<{
    children: ReactElement;
}>): ReactElement => {

    const {checkToken}: ITokenService = useTokenService();
    const {isLoggedIn}: IUserContext = useUserInfo();
    const router: AppRouterInstance = useRouter();
    const currentPath: string = usePathname();
    const [ returned, setReturned ] = useState<ReactElement>(<body />);

    useEffect(() => {
        checkToken();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {

            if (currentPath !== "/auth") {

                router.replace(currentPath);
                setReturned(children);
            }

        } else {
            router.replace("/auth");
            setReturned(children);
        }
    }, [isLoggedIn, router]);

    return returned;
};
