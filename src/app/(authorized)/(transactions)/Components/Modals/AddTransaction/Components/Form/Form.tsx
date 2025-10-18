import {type FormEvent, type ReactElement, useState} from "react";
import cl from './form.module.scss'
import {Category} from "./Components/Category/Category";
import {Type} from "./Components/Type/Type";
import {Sum} from "./Components/Sum/Sum";
import {Date} from "./Components/Date/Date";
import {Comment} from "./Components/Comment/Comment";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import {ECategory} from "@authPages/enums/category.enum";
import {useTransactionService} from "@authPages/api/transactionService.api";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {useModalActive} from "@hooks/useModalActive.hook";

export const Form = (): ReactElement => {

    const {createTransaction}: ITransactionService = useTransactionService();
    const {setAddTransaction}:IModalActiveContext = useModalActive();

    const handleOnSubmitPrevent = async (e: FormEvent) => {
        e.preventDefault();
        await createTransaction(value, () => {
            setValue({
                type: false,
                category: ECategory["Self care"],
                comment: "",
                date: "",
                sum: 0
            })
            setAddTransaction(false);
        });
    }

    const [value, setValue] = useState<Omit<ITransaction, "_id">>({
        type: false,
        category: ECategory["Self care"],
        comment: "",
        date: "",
        sum: 0,
    });

    const {comment, sum, date, category, type}: Omit<ITransaction, "_id"> = value;

    function changeValue<K extends keyof Omit<ITransaction, "_id">>(key: K, value: ITransaction[K]): void {

        setValue((prev: Omit<ITransaction, "_id">) => ({
            ...prev,
            [key]: value
        }));
    }

    return (
        <form id={"Add transaction form"} onSubmit={handleOnSubmitPrevent} className={cl.form}>
            <Type value={type} setValue={(v: ITransaction["type"]) => changeValue<"type">("type", v)}/>
            <Category value={category} setValue={(v: ITransaction["category"]) => changeValue<"category">("category", v)}/>
            <Sum value={sum} setValue={(v: ITransaction["sum"]) => changeValue<"sum">("sum", v)}/>
            <Date value={date} setValue={(v: ITransaction["date"]) => changeValue<"date">("date", v)}/>
            <Comment value={comment} setValue={(v: ITransaction["comment"]) => changeValue<"comment">("comment", v)}/>
        </form>
    );
};