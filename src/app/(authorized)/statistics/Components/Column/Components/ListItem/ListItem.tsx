import {type ReactElement} from 'react'
import cl from './listItem.module.scss'
import type {ECategory} from "@authPages/enums/category.enum";

export const ListItem = ({color, category, sum}: {
    color: `#${string}`,
    category: ECategory,
    sum: number
}): ReactElement => {

    return (
        <li className={cl.li}>
            <div className={cl.column}>
                <div className={cl.color} style={{
                    backgroundColor: color
                }} />
                <h5 className={cl.title}>{category.toLowerCase()}</h5>
            </div>
            <h5 className={cl.title}>{sum}</h5>
        </li>
    );
};