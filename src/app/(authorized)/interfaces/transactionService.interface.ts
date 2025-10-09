import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export interface ITransactionService {
    connectSocketIo: () => Promise<void>;
    getTransactions: () => Promise<ITransaction[] | undefined>
    createTransaction: (trans: Omit<ITransaction, "_id">) => Promise<ITransaction | undefined>
    deleteTransaction: (id: string) => Promise<ITransaction | undefined>
}