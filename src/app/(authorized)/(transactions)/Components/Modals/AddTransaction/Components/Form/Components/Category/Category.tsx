import type {ChangeEvent, ReactElement} from "react";
import cl from './category.module.scss'
import {Arrow} from "./Arrow/Arrow";
import type {ECategory} from "@authPages/enums/category.enum";

export const Category = ({value, setValue}: {
    value: ECategory;
    setValue: (v: ECategory) => void;
}):ReactElement => {

    return (
        <label className={cl.label}>
            <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value as ECategory)} placeholder="Select a category"/>
            <Arrow/>
        </label>
    );
};