"use client";

import cl from './layout.module.scss'
import {Header} from "@authPages/Components/Header/Header";
import {Sidebar} from "@authPages/Components/SideBad/Sidebar";
import {Container} from "@Components/Container/Container";
import {Circles} from "@authPages/Components/Circles/Circles";
import {type PropsWithChildren} from "react";
import {Preloader} from "@Components/Preloader/Preloader";
import {AddTransaction} from "@authPages/(transactions)/Components/Modals/AddTransaction/AddTransaction";
import {LogOutModal} from "@authPages/Components/LogOutModal/LogOutModal";
import {TransactionProvider} from "@authPages/Providers/transaction.provider";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <TransactionProvider>
            <Header />
            <main className={cl.main}>
                <Container className={cl.container}>
                    <Sidebar/>
                    {children}
                </Container>
                <AddTransaction/>
                <LogOutModal/>
                <Circles/>
                {process.env.NEXT_PUBLIC_MODE === "PROD" ? <Preloader /> : null}
            </main>
        </TransactionProvider>
    )
}