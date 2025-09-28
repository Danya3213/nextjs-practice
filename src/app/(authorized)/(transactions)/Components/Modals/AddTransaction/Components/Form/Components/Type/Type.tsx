"use client"

import cl from './type.module.scss'
import {type ReactElement, useState} from "react";

export const Type = (): ReactElement => {

    const [ isIncrement, setIsIncrement ] = useState<boolean>(false);
    
    return (
        <div className={cl.container}>
            <h4 className={!isIncrement ? cl.textActive : cl.text}>Income</h4>
            <label className={cl.label}>
                <button className={!isIncrement ? cl.buttonActive : cl.button} onClick={():void => setIsIncrement(!isIncrement)} />
            </label>
            <h4 className={isIncrement ? cl.textActive : cl.text}>Expense</h4>
        </div>
    );
};