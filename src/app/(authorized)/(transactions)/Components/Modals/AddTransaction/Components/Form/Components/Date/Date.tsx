import type {ReactElement} from "react";
import cl from './date.module.scss'

export const Date = ():ReactElement => {

    return (
        <label className={cl.label}>
            <input className={cl.input} type={"date"}/>
        </label>
    );
};