import type {Metadata} from "next";
import type {ReactNode} from "react";
import '../styles/index.scss';
import {Loading} from "@Components/Modals/Loading/Loading";
import {ResponseProvider} from "@Providers/response.provider";
import {UserInfoProvider} from "@Providers/userInfo.provider";
import {AuthValueProvider} from "@notAuthPages/auth/Providers/AuthValue.provider";
import {AuthGuardProvider} from "@/middlewares/auth.middleware";
import {ModalActiveProvider} from "@Providers/modalActive.provider";
import {NotificationProvider} from "@Providers/notification.provider";
import {Notifications} from "@Components/Notifications/Notifications";
import {TransactionProvider} from "@authPages/Providers/transaction.provider";

export const metadata: Metadata = {
    title: "Money guard", description: "Check your transactions in safety", icons: {
        icon: [{
            url: '/svgs/favicon.svg', href: '/svgs/favicon.svg',
        }]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {

    return (
        <html lang="en">
        <NotificationProvider>
            <ModalActiveProvider>
                <ResponseProvider>
                    <UserInfoProvider>
                        <AuthGuardProvider>
                            <AuthValueProvider>
                                <body>
                                <TransactionProvider>
                                    {children}
                                </TransactionProvider>
                                <Loading/>
                                <Notifications/>
                                </body>
                            </AuthValueProvider>
                        </AuthGuardProvider>
                    </UserInfoProvider>
                </ResponseProvider>
            </ModalActiveProvider>
        </NotificationProvider>
        </html>
    );
}
