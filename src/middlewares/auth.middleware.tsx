"use client";
import {type PropsWithChildren, useState} from "react";
import { useEffect } from "react";
import { useTokenService } from "@api/tokenServices";
import { useRouter } from "next/navigation";

export const AuthMiddleware = ({ children, authPage = false}: PropsWithChildren<{
    authPage?: boolean;
}>) => {
    const { checkToken } = useTokenService();
    const router = useRouter();
    const [ returned, setReturned ] = useState(<></>);

    useEffect(() => {
        const validate = async () => {
            const ok = await checkToken();
            console.log(ok)
            if (authPage && !ok) {
                console.log("1")
                router.push("/auth");
                setReturned(authPage ? children : <></>);
            }

            if (ok && !authPage) {
                console.log("2")
                router.push("/");
                setReturned(!authPage ? children : <></>);
            }
        };
        validate();
    }, []);

    return <>{returned}</>;
};
