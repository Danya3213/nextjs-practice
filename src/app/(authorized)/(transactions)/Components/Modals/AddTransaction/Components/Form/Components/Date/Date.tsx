import type {ChangeEvent, ReactElement} from "react";
import cl from './date.module.scss'

export const Date = ({value, setValue}: {
    value: string;
    setValue: (v: string) => void;
}):ReactElement => {

    return (
        <label className={cl.label}>
            <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className={cl.input} type={"date"}/>
        </label>
    );
};