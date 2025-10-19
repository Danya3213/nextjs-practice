import type {ITransactionStatistic} from "./transactionStatistic.interface";
import type {EMonths} from "../enums/months.enum";
import type {Dispatch, SetStateAction} from "react";
import type {IChangedTransaction} from "@authPages/statistics/interfaces/changedTransaction.interface";

export interface ITransactionStatisticContext {
    statistic: ITransactionStatistic[];
    setStatistic: Dispatch<SetStateAction<ITransactionStatistic[]>>;
    changedTransactions: IChangedTransaction[];
    filteredTransactions: IChangedTransaction[];
    month: EMonths | "";
    setMonth: Dispatch<SetStateAction<EMonths | "">>;
    year: number;
    setYear: Dispatch<SetStateAction<number>>;
}