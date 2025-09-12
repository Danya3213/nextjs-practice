"use client"

import {type ReactNode, useEffect, useState} from "react";
import cl from './page.module.scss'
import {useInputService} from "@notAuthPages/auth/services/inputService";
import type {IInputService} from "@notAuthPages/auth/interfaces/inputService.interface";
import {ModalLayout} from "@notAuthPages/auth/ModalLayout/ModalLayout";
import {useTokenService} from "@api/tokenServices";

export default function Page (): ReactNode {

    const [ haveAccount, setHaveAccount ] = useState<boolean>(true);

    const {resetAll}: IInputService = useInputService();

    useEffect(() => {

        const timeout = setTimeout(() => {

            resetAll();

        }, 100);

        return () => clearTimeout(timeout);

    }, [haveAccount]);

    return (
        <main className={haveAccount ? cl.main : cl.mainAlt}>
            <ModalLayout active={haveAccount} haveAccount={true} setHaveAccount={setHaveAccount} />
            <ModalLayout active={!haveAccount} haveAccount={false} setHaveAccount={setHaveAccount} />
        </main>
    );
};