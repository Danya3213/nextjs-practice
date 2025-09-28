import type {ReactElement} from "react";
import cl from './sum.module.scss'

export const Sum = ():ReactElement => {

    return (
        <label className={cl.label}>
            <input className={cl.input} placeholder="0.00" type={"number"}/>
        </label>
    );
};