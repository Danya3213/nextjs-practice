import type {FormEvent, ReactElement} from "react";
import cl from './form.module.scss'
import {Category} from "./Components/Category/Category";
import {Type} from "./Components/Type/Type";
import {Sum} from "./Components/Sum/Sum";
import {Date} from "./Components/Date/Date";
import {Comment} from "./Components/Comment/Comment";

export const Form = ():ReactElement => {

    const handleOnSubmitPrevent = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmitPrevent} className={cl.form}>
            <Type/>
            <Category/>
            <Sum/>
            <Date/>
            <Comment/>
        </form>
    );
};