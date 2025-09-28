import type {PropsWithChildren, ReactElement} from "react";
import {AuthValueProvider} from "@notAuthPages/auth/Providers/AuthValue.provider";

export default function AuthLayout({children}: PropsWithChildren): ReactElement {
    return (
        <AuthValueProvider>
            {children}
        </AuthValueProvider>
    )
}