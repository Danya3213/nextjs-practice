import type {ChangeEvent, ReactElement} from "react";
import cl from './comment.module.scss'

export const Comment = ({value, setValue}: {
    value: string;
    setValue: (v: string) => void;
}):ReactElement => {

    return (
        <label className={cl.label}>
            <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className={cl.input} type={"text"} placeholder={"Comment"}/>
        </label>
    );
};