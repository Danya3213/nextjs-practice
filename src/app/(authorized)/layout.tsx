"use client";

import type {PropsWithChildren} from "react";
import {Header} from "@authPages/Components/Header/Header";
import {Sidebar} from "@authPages/Components/SideBad/Sidebar";
import {Container} from "@Components/Container/Container";
import cl from './layout.module.scss'
import {Circles} from "@authPages/Components/Circles/Circles";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <>
            <Header />
            <main className={cl.main}>
                <Container className={cl.container}>
                    <Sidebar/>
                    {children}
                </Container>
                <Circles/>
            </main>
        </>
    )
}