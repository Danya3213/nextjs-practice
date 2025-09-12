import type {PropsWithChildren, ReactNode} from "react";
import {AuthValueProvider} from "@notAuthPages/auth/Providers/AuthValue.provider";

export default function AuthLayout({children}: PropsWithChildren): ReactNode {
    return (
        <AuthValueProvider>
            {children}
        </AuthValueProvider>
    )
}