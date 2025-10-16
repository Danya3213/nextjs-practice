"use client"

import {type ReactElement, useState} from "react";
import cl from './list.module.scss'
import {Search} from "./Components/Search/Search";
import {months} from "@authPages/statistics/Components/List/Components/Search/constans/months.const";

export const List = (): ReactElement => {

    const [ month, setMonth ] = useState<string>(months[0]);
    const [ year, setYear ] = useState<number>(2025);

    return (
        <div className={cl.list}>
            <Search month={month} setMonth={setMonth} year={year} setYear={setYear} />
        </div>
    );
};