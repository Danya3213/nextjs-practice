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
            <select className={cl.select} value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value as ECategory)}>
                <option className={cl.option} value="MAIN EXPENSES">Main expenses</option>
                <option className={cl.option} value="PRODUCTS">Products</option>
                <option className={cl.option} value="CAR">Car</option>
                <option className={cl.option} value="SELF CARE">Self care</option>
                <option className={cl.option} value="CHILD CARE">Child care</option>
                <option className={cl.option} value="HOUSEHOLD PRODUCTS">Household products</option>
                <option className={cl.option} value="EDUCATION">Education</option>
                <option className={cl.option} value="LEISURE">Leisure</option>
                <option className={cl.option} value="OTHER EXPENSES">Other expenses</option>
                <option className={cl.option} value="ENTERTAINMENT">Entertainment</option>
            </select>
            <Arrow/>
        </label>
    );
};