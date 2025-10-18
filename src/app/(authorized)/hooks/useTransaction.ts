import {useContext} from "react";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {TransactionContext} from "@authPages/store/transactions.store";

export const useTransaction = (): ITransactionContext => {
    const context: ITransactionContext | null = useContext(TransactionContext);
    if (!context) throw new Error("useTransaction must be used within an TransactionProvider");

    return context;
};