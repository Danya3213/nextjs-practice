import {type ReactElement} from "react";
import cl from './chart.module.scss'
import {PieChart} from "@mui/x-charts/PieChart";
import type {
    ITransactionStatisticContext
} from "@authPages/statistics/interfaces/transactionStatisticContext.interface";
import {useTransactionStatistic} from "@authPages/statistics/hooks/useTransactionStatistic";

export const Chart = (): ReactElement => {

    const {statistic}: ITransactionStatisticContext = useTransactionStatistic();

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
                        data: statistic,
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