"use client"

import cl from './transaction.module.scss'
import {Top} from "./Components/Top/Top";
import {useEffect} from "react";
import {useTransactionService} from "@authPages/api/transactionService.api";
import {useTransaction} from "@authPages/hooks/useTransaction.hook";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export default function Home() {

    const {getTransactions}: ITransactionService = useTransactionService();
    const {setTransactions}: ITransactionContext = useTransaction();

    useEffect(() => {

        async function saveData () {

            const data: ITransaction[] | undefined = await getTransactions();

            setTransactions(data);
        }

        saveData();
    }, []);

  return (
      <section>
          <div className={cl.container}>
              <Top />
          </div>
      </section>
  );
}
