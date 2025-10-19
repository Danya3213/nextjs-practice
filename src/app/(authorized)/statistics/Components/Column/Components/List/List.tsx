import {type ReactElement} from 'react'
import cl from './list.module.scss'
import {ListItem} from '../ListItem/ListItem'
import type {
    ITransactionStatisticContext
} from "@authPages/statistics/interfaces/transactionStatisticContext.interface";
import {useTransactionStatistic} from "@authPages/statistics/hooks/useTransactionStatistic";
import type {ITransactionStatistic} from "@authPages/statistics/interfaces/transactionStatistic.interface";

export const List = (): ReactElement => {

    const {statistic}: ITransactionStatisticContext = useTransactionStatistic();

    return (
        <>
            <div className={cl.row}>
                <h3 className={cl.title}>Category</h3>
                <h3 className={cl.title}>Sum</h3>
            </div>
            <ul className={cl.ul}>
                {statistic.map((stat: ITransactionStatistic, index: number) => {

                    return <ListItem key={index} color={stat.color} category={stat.category} sum={stat.value} />
                })}
            </ul>
        </>
    );
};