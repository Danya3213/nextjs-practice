import type {ReactElement} from "react";
import cl from './arrow.module.scss'

export const Arrow = ():ReactElement => {

    return (
        <button className={cl.arrow} type={"button"} />
    );
};