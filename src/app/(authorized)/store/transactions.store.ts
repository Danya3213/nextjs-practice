import { createContext} from "react";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";

export const TransactionContext = createContext<ITransactionContext | null>(null)