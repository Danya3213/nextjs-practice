"use client";

import cl from './layout.module.scss'
import {Header} from "@authPages/Components/Header/Header";
import {Sidebar} from "@authPages/Components/SideBad/Sidebar";
import {Container} from "@Components/Container/Container";
import {Circles} from "@authPages/Components/Circles/Circles";
import {type PropsWithChildren} from "react";

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