import {useContext} from "react";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {TransactionContext} from "@authPages/store/transactions.store";

export const useTransaction = (): ITransactionContext => {
    const context: ITransactionContext | null = useContext(TransactionContext);
    if (!context) throw new Error("useResponse must be used within an ResponseProvider");

    return context;
};