import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export interface IChangedTransaction extends ITransaction {

    color: `#${string}`,
    label: string,
    value: number,
}