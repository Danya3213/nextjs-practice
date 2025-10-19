import {type ReactElement} from "react";
import cl from './column.module.scss'
import {Search} from "./Components/Search/Search";
import {List} from './Components/List/List'

export const Column = (): ReactElement => {

    return (
        <div className={cl.list}>
            <Search />
            <List />
        </div>
    );
};