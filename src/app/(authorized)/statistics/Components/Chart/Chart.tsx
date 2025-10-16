"use client"

import {type ReactElement} from "react";
import cl from './chart.module.scss'
import {PieChart} from "@mui/x-charts/PieChart";
import {useTransaction} from "@authPages/hooks/useTransaction";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {CustomTooltip} from "./Components/ToolTip";

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
            <div className={cl.container}>
                <div className={cl.background1} />
                <div className={cl.background2} />
                <PieChart
                    series={[{
                        innerRadius: 105,
                        outerRadius: 143,
                        data,
                    }]}
                    {...settings}
                    sx={{
                        '& .MuiPieArc-root': {
                            stroke: 'none',
                        },
                    }}
                />
                <span className={cl.text}>₴ 24 000.00</span>
            </div>
        </div>
    );
};