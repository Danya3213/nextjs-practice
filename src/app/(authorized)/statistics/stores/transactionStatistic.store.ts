"use client"

import {createContext} from "react";
import type {
    ITransactionStatisticContext
} from "@authPages/statistics/interfaces/transactionStatisticContext.interface";

export const TransactionStatisticContext = createContext<null | ITransactionStatisticContext>(null)