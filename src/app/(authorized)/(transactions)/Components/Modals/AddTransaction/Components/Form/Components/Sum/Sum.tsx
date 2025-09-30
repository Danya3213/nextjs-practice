import type {ChangeEvent, ReactElement} from "react";
import cl from './sum.module.scss'

export const Sum = ({value, setValue}: {
    value: number;
    setValue: (v: number) => void;
}):ReactElement => {

    return (
        <label className={cl.label}>
            <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(+e.target.value)} className={cl.input} placeholder="0.00" type={"number"}/>
        </label>
    );
};