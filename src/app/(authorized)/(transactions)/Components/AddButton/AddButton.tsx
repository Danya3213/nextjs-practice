"use client"

import type {ReactElement} from "react";
import cl from './addButton.module.scss'
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {useModalActive} from "@hooks/useModalActive.hook";

export const AddButton = ():ReactElement => {

    const {setAddTransaction}: IModalActiveContext = useModalActive();

    return (
        <button className={cl.button} onClick={(): void => setAddTransaction(true)} />
    );
};