"use client"

import {type ReactElement, useState} from "react";
import {InputLayout} from "@authPages/statistics/Components/List/Components/Search/Layout/InputLayout/InputLayout";
import {years} from "./constans/years.const";
import {months} from "./constans/months.const";
import cl from './search.module.scss'

export const Search = (): ReactElement => {

    const [ year, setYear ] = useState<number>(2025);
    const [ month, setMonth ] = useState<string>(months[0]);

    return (
        <div className={cl.container}>
            <InputLayout<string> data={months} value={month} setValue={setMonth}/>
            <InputLayout<number> data={years} value={year} setValue={setYear}/>
        </div>
    );
};