"use client"

import {TransactionContext} from "@authPages/store/transactions.store";
import {useState, type PropsWithChildren, type ReactElement} from "react";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export const TransactionProvider = ({children}: PropsWithChildren): ReactElement => {

    const [ transactions, setTransactions ] = useState<ITransaction[]>([]);

    return (
        <TransactionContext.Provider value={{
            transactions,
            setTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}