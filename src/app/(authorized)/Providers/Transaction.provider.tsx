"use client"

import {type PropsWithChildren, type ReactNode, useState} from "react";
import {TransactionContext} from "@authPages/store/transaction.store";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export const TransactionProvider = ({children}: PropsWithChildren): ReactNode => {

    const [ transactions, setTransactions ] = useState<ITransaction[] | undefined>([]);

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                setTransactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}