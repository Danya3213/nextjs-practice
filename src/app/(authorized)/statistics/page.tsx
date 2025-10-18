"use client"

import type {ReactElement} from "react";
import {Title} from "./Components/Title/Title";
import cl from './page.module.scss'
import {Column} from '@authPages/statistics/Components/Column/Column'
import {Chart} from './Components/Chart/Chart'
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {useTransaction} from "@authPages/hooks/useTransaction";
import type {IChangedTransaction} from "@authPages/interfaces/changedTransaction";

export default function Page (): ReactElement {

    const {transactions}: ITransactionContext = useTransaction();

    function generateRandomHexColor(): `#${string}` {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }

    const changedTransactions: IChangedTransaction[] = transactions.map((trans) => {

        return {
            ...trans,
            color: generateRandomHexColor(),
            label: trans.comment,
            value: trans.sum,
        }
    });

    return (
        <div className={cl.container}>
            <Title/>
            <Chart transactions={changedTransactions}/>
            <Column transactions={changedTransactions}/>
        </div>
    )
}