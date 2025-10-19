import {type ReactElement} from "react";
import {InputLayout} from "@authPages/statistics/Components/Column/Components/Search/Layout/InputLayout/InputLayout";
import {years} from "./constans/years.const";
import {months} from "./constans/months.const";
import cl from './search.module.scss'
import type {
    ITransactionStatisticContext
} from "@authPages/statistics/interfaces/transactionStatisticContext.interface";
import {useTransactionStatistic} from "@authPages/statistics/hooks/useTransactionStatistic";
import type {EMonths} from "@authPages/statistics/enums/months.enum";

export const Search = (): ReactElement => {

    const {month, setMonth, year, setYear}: ITransactionStatisticContext = useTransactionStatistic();

    return (
        <div className={cl.container}>
            <InputLayout<EMonths | ""> data={months} value={month} setValue={setMonth}/>
            <InputLayout<number> data={years} value={year} setValue={setYear}/>
        </div>
    );
};