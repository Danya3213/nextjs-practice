"use client"

import {useState, type PropsWithChildren, type ReactElement, useEffect} from "react";
import {months} from "@authPages/statistics/Components/Column/Components/Search/constans/months.const";
import {useTransaction} from "@authPages/hooks/useTransaction";
import {TransactionStatisticContext} from "@authPages/statistics/stores/transactionStatistic.store";
import type {ITransactionStatistic} from "@authPages/statistics/interfaces/transactionStatistic.interface";
import type {IChangedTransaction} from "@authPages/statistics/interfaces/changedTransaction.interface";
import type {EMonths} from "@authPages/statistics/enums/months.enum";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {ECategory} from "@authPages/enums/category.enum";

export const TransactionStatisticProvider = ({children}: PropsWithChildren): ReactElement => {

    const [ statistic, setStatistic ] = useState<ITransactionStatistic[]>([]);
    const [ changedTransactions, setChangedTransactions ] = useState<IChangedTransaction[]>([]);
    const [ filteredTransactions, setFilteredTransactions ] = useState<IChangedTransaction[]>([]);

    const [ month, setMonth ] = useState<EMonths | "">("");
    const [ year, setYear ] = useState<number>(0);

    const {transactions}: ITransactionContext = useTransaction();

    function generateRandomHexColor(): `#${string}` {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }

    const capitalize = (str: string): string =>
        str.charAt(0).toUpperCase() + str.slice(1);

    // const getStatistics = (transactions: IChangedTransaction[]): ITransactionStatistic[] => {
    //     const statsMap: Record<keyof ECategory, { value: number; color: string, label: string }> = {};
    //
    //     transactions.forEach(trans => {
    //         const category: string = capitalize(trans.category.toLowerCase());
    //
    //         if (!statsMap[category]) {
    //             statsMap[category] = {
    //                 value: 0,
    //                 color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    //                 label: category,
    //             };
    //         }
    //
    //         statsMap[category].value += trans.sum;
    //         statsMap[category].label = category;
    //     })
    //
    //     return Object.entries(statsMap).map(([category, { value, color, label }]) => ({
    //         category,
    //         value,
    //         color,
    //         label,
    //     }));
    // };

    const getStatistics = (
        transactions: IChangedTransaction[]
    ): ITransactionStatistic[] => {
        const statsMap: Partial<
            Record<ECategory, { value: number; color: `#${string}`; label: string }>
        > = {};

        for (const trans of transactions) {
            const category = trans.category;

            if (!statsMap[category]) {
                statsMap[category] = {
                    value: 0,
                    color: `#${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0")}` as `#${string}`,
                    label: capitalize(category.toLowerCase()),
                };
            }

            statsMap[category]!.value += trans.sum;
        }

        return Object.entries(statsMap).map(([category, {value, color, label}]) => ({
            category: category as ECategory,
            value,
            color,
            label,
        }));
    }



    const getChangedTransactions = (transactions: ITransaction[]): IChangedTransaction[] => {

        return transactions.map((trans) => {

            return {
                ...trans,
                color: generateRandomHexColor(),
                label: trans.comment,
                value: trans.sum,
            }
        })
    }

    const getFilteredTransactions = (transactions: IChangedTransaction[]): IChangedTransaction[] => {

        return transactions.filter((item: IChangedTransaction) => {

            const [itemYear, itemMonth] = item.date.split("-");

            const haveMonth = month !== "";
            const haveYear = +year !== 0;

            if (haveMonth && haveYear) {
                return +itemYear === +year && months[+itemMonth - 1] === month;
            }

            if (haveMonth && !haveYear) {
                return months[+itemMonth - 1] === month;
            }

            if (!haveMonth && haveYear) {
                return +itemYear === +year;
            }

            return true;
        })
    }

    useEffect(() => {

        const changedTransactions = getChangedTransactions(transactions);
        const filteredTransactions = getFilteredTransactions(changedTransactions);
        const statistic = getStatistics(filteredTransactions);

        setChangedTransactions(changedTransactions);
        setFilteredTransactions(filteredTransactions);
        setStatistic(statistic);

    }, [transactions, month, year]);

    return (
        <TransactionStatisticContext.Provider value={{
            statistic,
            setStatistic,
            changedTransactions,
            filteredTransactions,
            month,
            setMonth,
            year,
            setYear
        }}>
            {children}
        </TransactionStatisticContext.Provider>
    )
}