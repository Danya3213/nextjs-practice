import {useContext} from "react";
import {TransactionStatisticContext} from "@authPages/statistics/stores/transactionStatistic.store";
import type {
    ITransactionStatisticContext
} from "@authPages/statistics/interfaces/transactionStatisticContext.interface";

export const useTransactionStatistic = (): ITransactionStatisticContext => {

    const context: ITransactionStatisticContext | null = useContext(TransactionStatisticContext);

    if (!context) throw new Error('useTransactionStatistic must be used within a TransactionStatisticProvider');

    return context;
}