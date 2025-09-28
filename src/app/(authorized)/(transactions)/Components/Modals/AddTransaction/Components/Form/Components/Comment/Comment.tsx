import type {ReactElement} from "react";
import cl from './comment.module.scss'

export const Comment = ():ReactElement => {

    return (
        <label className={cl.label}>
            <input className={cl.input} type={"text"} placeholder={"Comment"}/>
        </label>
    );
};