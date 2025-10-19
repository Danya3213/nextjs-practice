import {type PropsWithChildren, type ReactElement} from 'react'
import {TransactionStatisticProvider} from "@authPages/statistics/Providers/transactionStatistic.provider";

export default function Layout ({children}: PropsWithChildren): ReactElement {

    return (
        <TransactionStatisticProvider>
            {children}
        </TransactionStatisticProvider>
    );
};