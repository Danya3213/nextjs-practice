"use client"

import cl from './list.module.scss'
import {ListItem} from "./ListItem/ListItem";
import {useTransactionService} from "@authPages/api/transactionService.api";
import {type ReactElement} from "react";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {useTransaction} from "@authPages/hooks/useTransaction";

export const List = (): ReactElement => {

    const {deleteTransaction}: ITransactionService = useTransactionService();
    const {transactions}: ITransactionContext = useTransaction();

    const handleDeleteTransaction = async (id: string): Promise<void> => {

        await deleteTransaction(id);
    }

    return (
        <ul className={cl.list}>
            {
                transactions !== undefined && transactions.length !== 0 ?

                    transactions.map((i) => {

                        const {_id, ...rest} = i;
                        return <ListItem key={_id} onClick={() => handleDeleteTransaction(_id)} {...rest} />
                    })

                : <></>
            }
        </ul>
    );
};