import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {Socket} from "socket.io-client";

export interface ITransactionService {
    connectSocketIo: () => Socket | undefined;
    disconnectSocketIo: (socket: Socket | undefined) => void;
    getTransactions: () => Promise<ITransaction[] | undefined>
    createTransaction: (trans: Omit<ITransaction, "_id">, cb?: () => void) => Promise<ITransaction | undefined>
    deleteTransaction: (id: string) => Promise<ITransaction | undefined>
}