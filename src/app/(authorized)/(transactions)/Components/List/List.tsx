import cl from './list.module.scss'
import {useTransaction} from "@authPages/hooks/useTransaction.hook";
import {ListItem} from "@authPages/(transactions)/Components/ListItem/ListItem";
import {useTransactionService} from "@authPages/api/transactionService.api";
import type {ReactNode} from "react";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";

export const List = (): ReactNode => {

    const {transactions}: ITransactionContext | undefined = useTransaction();
    const {deleteTransaction} = useTransactionService();

    return (
        <ul className={cl.list}>
            {
                transactions !== undefined && transactions.length !== 0 ?

                    transactions.map((i) => {

                        const {_id, ...rest} = i;
                        return <ListItem key={_id} onClick={() => deleteTransaction(_id)} {...rest} />
                    })

                : <></>
            }
        </ul>
    );
};