import {useContext} from "react";
import {TransactionContext} from "@authPages/store/transaction.store";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";

export const useTransaction = (): ITransactionContext => {
    const context: ITransactionContext | null = useContext(TransactionContext);
    if (!context) throw new Error("useTransaction must be used within an TransactionProvider");

    return context;
};