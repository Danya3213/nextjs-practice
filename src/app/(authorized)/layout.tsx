"use client"

import cl from './layout.module.scss'
import {Header} from "@authPages/Components/Header/Header";
import {Sidebar} from "@authPages/Components/SideBad/Sidebar";
import {Container} from "@Components/Container/Container";
import {Circles} from "@authPages/Components/Circles/Circles";
import {type PropsWithChildren, useEffect} from "react";
import {Preloader} from "@Components/Preloader/Preloader";
import {AddTransaction} from "@authPages/(transactions)/Components/Modals/AddTransaction/AddTransaction";
import {LogOutModal} from "@authPages/Components/LogOutModal/LogOutModal";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import {useTransactionService} from "@authPages/api/transactionService.api";
import type {Socket} from "socket.io-client";
import {EditTransaction} from "@authPages/(transactions)/Components/Modals/EditTransaction/EditTransaction";

export default function Layout({ children }: PropsWithChildren) {

    const {connectSocketIo, disconnectSocketIo}: ITransactionService = useTransactionService();

    useEffect((): () => void => {

        const socket: Socket | undefined = connectSocketIo();

        return () => disconnectSocketIo(socket);
    }, [])

    return (
        <>
            <Header />
            <main className={cl.main}>
                <Container className={cl.container}>
                    <Sidebar/>
                    {children}
                </Container>
                <AddTransaction/>
                <EditTransaction/>
                <LogOutModal/>
                <Circles/>
                {process.env.NEXT_PUBLIC_MODE === "PROD" ? <Preloader /> : null}
            </main>
        </>
    )
}