"use client"

import {type PropsWithChildren, type ReactElement, useState} from "react";
import {ModalActiveContext} from "@/stores/modalActive.store";

export const ModalActiveProvider = ({children}: PropsWithChildren): ReactElement => {

    const [addTransaction, setAddTransaction] = useState<boolean>(false);
    const [editTransaction, setEditTransaction] = useState<boolean>(false);
    const [logOut, setLogOut] = useState<boolean>(false);

    return (
        <ModalActiveContext.Provider
            value={{
                addTransaction,
                setAddTransaction,
                editTransaction,
                setEditTransaction,
                logOut,
                setLogOut
            }}
        >
            {children}
        </ModalActiveContext.Provider>
    )
}