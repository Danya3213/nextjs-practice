import cl from './top.module.scss'
import type {ReactElement} from "react";

export const Top = (): ReactElement => {

    return (
        <ul className={cl.list}>
            <li className={cl.listItem}>Date</li>
            <li className={cl.listItem}>Type</li>
            <li className={cl.listItem}>Category</li>
            <li className={cl.listItem}>Comment</li>
            <li className={cl.listItem}>Sum</li>
        </ul>
    );
};