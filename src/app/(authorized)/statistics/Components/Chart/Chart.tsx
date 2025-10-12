"use client"

import {type ReactElement} from "react";
import cl from './chart.module.scss'
import {PieChart} from "@mui/x-charts/PieChart";
import {useTransaction} from "@authPages/hooks/useTransaction";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";

export const Chart = (): ReactElement => {

    const {transactions}: ITransactionContext = useTransaction();

    const data = [
        { label: 'Group A', value: 400, color: '#0088FE' },
        { label: 'Group B', value: 300, color: '#00C49F' },
        { label: 'Group C', value: 300, color: '#FFBB28' },
        { label: 'Group D', value: 200, color: '#FF8042' },
    ];

    const settings = {
        width: 288,
        height: 288,
        hideLegend: true,
    };

    return (
        <div className={cl.list}>
            <PieChart
                series={[{ innerRadius: 130, outerRadius: 80, data }]}
                {...settings}
            />
        </div>
    );
};