import {type ReactElement, useState} from "react";
import cl from './category.module.scss'
import {Arrow} from "./Components/Arrow/Arrow";
import {ECategory} from "@authPages/enums/category.enum";
import {Item} from './Components/Item/Item'

export const Category = ({value, setValue}: {
    value: ECategory;
    setValue: (v: ECategory) => void;
}):ReactElement => {

    const [ active, setActive ] = useState<boolean>(false);

    const handleOnClick = (value: ECategory): void => {

        setValue(value);
    }

    return (
        <label className={cl.label} onClick={():void => setActive(!active)}>
            <h3 className={cl.title}>{value.toLowerCase()}</h3>
            <Arrow active={active}/>
            <ul className={active ? cl.ulActive : cl.ul}>
                {Object.values(ECategory).map((category, key) => (
                    <Item key={key} category={category} onClick={handleOnClick} />
                ))}
            </ul>
        </label>
    );
};