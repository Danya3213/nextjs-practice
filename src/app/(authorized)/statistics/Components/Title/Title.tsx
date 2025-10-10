import type {ReactElement} from "react";
import cl from './title.module.scss'

export const Title = (): ReactElement => {

    return (
        <h2 className={cl.title}>
           Statistics
        </h2>
    );
};