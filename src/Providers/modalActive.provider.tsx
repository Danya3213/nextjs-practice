"use client"

import {type PropsWithChildren, type ReactElement, useState} from "react";
import {ModalActiveContext} from "@/stores/modalActive.store";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import {ECategory} from "@authPages/enums/category.enum";

export const ModalActiveProvider = ({children}: PropsWithChildren): ReactElement => {

    const [addTransaction, setAddTransaction] = useState<boolean>(false);
    const [editTransaction, setEditTransaction] = useState<boolean>(false);
    const [editTransactionValue, setEditTransactionValue] = useState<ITransaction>({
        sum: 0,
        date: "3232-32-32",
        type: false,
        comment: "",
        category: ECategory["Other expenses"],
        _id: ""
    });
    const [logOut, setLogOut] = useState<boolean>(false);

    return (
        <ModalActiveContext.Provider
            value={{
                addTransaction,
                setAddTransaction,
                editTransaction,
                setEditTransaction,
                editTransactionValue,
                setEditTransactionValue,
                logOut,
                setLogOut
            }}
        >
            {children}
        </ModalActiveContext.Provider>
    )
}