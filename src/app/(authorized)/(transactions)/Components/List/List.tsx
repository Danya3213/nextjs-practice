"use client"

import cl from './list.module.scss'
import {ListItem} from "./ListItem/ListItem";
import {useTransactionService} from "@authPages/api/transactionService.api";
import {type ReactElement, useEffect, useState} from "react";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
// import {io, Socket} from 'socket.io-client';

// const socket = io(`${process.env.NEXT_PUBLIC_NEST_URL}/transactions`, {
//     withCredentials: true,
//     transports: ["websocket"],
// });

// const socket = io(`wss://localhost:4200/api/transactions`, {
//     withCredentials: true,
//     transports: ["websocket"],
// });

export const List = (): ReactElement => {

    const {deleteTransaction}: ITransactionService = useTransactionService();
    const [ transactions, setTransactions ] = useState<ITransaction[]>([]);

    const getTransaction = async (): Promise<void> => {
    //
    //     socket.on("connect", () => {
    //         devConsole.log(socket.id)
    //         socket.emit("transactions");
    //     })
    //
    //     socket.on("transactions", (data) => {
    //
    //         devConsole.log("Оновлений масив:", data);
    //         setTransactions(data);
    //     });
    //
    //     return (): void => {
    //         socket.off("transactions");
    //     };
    }

    const handleDeleteTransaction = async (id: string): Promise<void> => {

        await deleteTransaction(id);
        await getTransaction();
    }

    useEffect((): void => {

        getTransaction();
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