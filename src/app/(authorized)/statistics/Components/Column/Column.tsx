"use client"

import {type ReactElement, useState} from "react";
import cl from './column.module.scss'
import {Search} from "./Components/Search/Search";
import {months} from "@authPages/statistics/Components/Column/Components/Search/constans/months.const";
import {List} from './Components/List/List'
import type {IChangedTransaction} from "@authPages/interfaces/changedTransaction";

export const Column = ({transactions}: {
    transactions: IChangedTransaction[],
}): ReactElement => {

    const [ month, setMonth ] = useState<string>(months[0]);
    const [ year, setYear ] = useState<number>(2025);

    return (
        <div className={cl.list}>
            <Search month={month} setMonth={setMonth} year={year} setYear={setYear} />
            <List transactions={transactions}/>
        </div>
    );
};