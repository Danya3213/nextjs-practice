import type {PropsWithChildren} from "react";
import {AuthValueProvider} from "@notAuthPages/auth/Providers/AuthValue.provider";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export default function AuthLayout({children}: PropsWithChildren) {
    return (
        <AuthMiddleware authPage={true}>
            <AuthValueProvider>
            {children}
        </AuthValueProvider>
        </AuthMiddleware>

    )
}