import cl from './title.module.scss'
import type {ReactElement} from "react";

export const Title = (): ReactElement => {

    return (
        <h2 className={cl.title}>Update transaction</h2>
    );
};