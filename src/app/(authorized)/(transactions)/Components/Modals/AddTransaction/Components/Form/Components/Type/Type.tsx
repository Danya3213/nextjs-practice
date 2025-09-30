"use client"

import cl from './type.module.scss'
import {type EventHandler, type ReactElement, useState} from "react";

export const Type = ({value, setValue}: {
    value: boolean;
    setValue: (v: boolean) => void;
}): ReactElement => {
    
    return (
        <div className={cl.container}>
            <h4 className={!value ? cl.textActive : cl.text}>Income</h4>
            <label className={cl.label}>
                <button className={!value ? cl.buttonActive : cl.button} onClick={():void => setValue(!value)} type={"button"} />
            </label>
            <h4 className={value ? cl.textActive : cl.text}>Expense</h4>
        </div>
    );
};