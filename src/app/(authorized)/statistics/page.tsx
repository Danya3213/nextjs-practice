"use client"

import {type ReactElement} from "react";
import {Title} from "./Components/Title/Title";
import cl from './page.module.scss'
import {Column} from '@authPages/statistics/Components/Column/Column'
import {Chart} from './Components/Chart/Chart'

export default function Page (): ReactElement {

    return (
        <div className={cl.container}>
            <Title/>
            <Chart/>
            <Column/>
        </div>
    )
}