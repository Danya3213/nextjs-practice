import type {Dispatch, SetStateAction} from "react";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export interface IModalActiveContext {

    addTransaction: boolean;
    setAddTransaction: Dispatch<SetStateAction<boolean>>;
    editTransaction: boolean;
    setEditTransaction: Dispatch<SetStateAction<boolean>>;
    editTransactionValue: ITransaction;
    setEditTransactionValue: Dispatch<SetStateAction<ITransaction>>;
    logOut: boolean;
    setLogOut: Dispatch<SetStateAction<boolean>>;
}