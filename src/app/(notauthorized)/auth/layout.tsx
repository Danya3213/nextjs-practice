import type {PropsWithChildren} from "react";
import {AuthValueProvider} from "@notAuthPages/auth/Providers/AuthValue.provider";

export default function AuthLayout({children}: PropsWithChildren) {
    return (
        <AuthValueProvider>
            {children}
        </AuthValueProvider>
    )
}