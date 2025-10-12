import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {Dispatch, SetStateAction} from "react";

export interface ITransactionContext {

    transactions: ITransaction[];
    setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}