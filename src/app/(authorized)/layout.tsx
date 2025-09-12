"use client";

import cl from './layout.module.scss'
import {Header} from "@authPages/Components/Header/Header";
import {Sidebar} from "@authPages/Components/SideBad/Sidebar";
import {Container} from "@Components/Container/Container";
import {Circles} from "@authPages/Components/Circles/Circles";
import {TransactionProvider} from "@authPages/Providers/Transaction.provider";
import {type PropsWithChildren} from "react";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <TransactionProvider>
            <Header />
            <main className={cl.main}>
                <Container className={cl.container}>
                    <Sidebar/>
                    {children}
                </Container>
                <Circles/>
            </main>
        </TransactionProvider>
    )
}