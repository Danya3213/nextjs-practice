import type {ReactElement} from "react";
import cl from './list.module.scss'
import {Search} from "./Components/Search/Search";

export const List = (): ReactElement => {

    return (
        <div className={cl.list}>
            <Search/>
        </div>
    );
};