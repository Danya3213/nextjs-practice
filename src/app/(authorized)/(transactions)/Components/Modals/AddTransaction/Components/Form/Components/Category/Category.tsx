import type {ReactElement} from "react";
import cl from './category.module.scss'
import {Arrow} from "./Arrow/Arrow";

export const Category = ():ReactElement => {

    return (
        <label className={cl.label}>
            <input placeholder="Select a category"/>
            <Arrow/>
        </label>
    );
};