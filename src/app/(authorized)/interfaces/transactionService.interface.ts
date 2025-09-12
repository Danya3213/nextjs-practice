import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export interface ITransactionService {
    getTransactions: () => Promise<ITransaction[] | undefined>
}