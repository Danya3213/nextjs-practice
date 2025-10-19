import {type ReactElement} from 'react'
import cl from './item.module.scss'
import type {ECategory} from "@authPages/enums/category.enum";

export const Item = ({category, onClick}: {
    category: ECategory,
    onClick: (v: ECategory) => void
}): ReactElement => {

    return (
        <li className={cl.li} key={category} onClick={() => onClick(category)}>{category.toLowerCase()}</li>
    );
};