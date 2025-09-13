"use client"

import cl from './list.module.scss'
import {ListItem} from "@authPages/(transactions)/Components/ListItem/ListItem";
import {useTransactionService} from "@authPages/api/transactionService.api";
import {type ReactNode, useEffect, useState} from "react";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";

export const List = (): ReactNode => {

    const {getTransactions, deleteTransaction}: ITransactionService = useTransactionService();
    const [ transactions, setTransactions ] = useState<ITransaction[]>([]);

    const getTransaction = async ():Promise<void> => {

        const data: ITransaction[] | undefined = await getTransactions();

        if (data === undefined) {
            setTransactions([]);
            return;
        }

        setTransactions(data);
    }

    const handleDeleteTransaction = async (id: string): Promise<void> => {

        await deleteTransaction(id);
        await getTransaction();
    }

    useEffect((): void => {

        getTransaction()
    }, []);

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