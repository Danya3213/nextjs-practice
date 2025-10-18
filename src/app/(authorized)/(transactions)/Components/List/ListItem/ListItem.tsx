import type {MouseEventHandler, ReactElement} from "react";
import cl from './listItem.module.scss';
import type {ECategory} from "@authPages/enums/category.enum";
import Image from "next/image";

export const ListItem = ({onClick, date, type, category, comment, sum}: {
    onClick: MouseEventHandler<HTMLButtonElement>;
    date: string;
    type: boolean;
    category: ECategory;
    comment: string;
    sum: number;
}): ReactElement => {

    const dateString = date.replaceAll("-", '.');

    return (
        <li className={cl.li}>
            <div className={cl.content}>
                <h5 className={cl.text}>{dateString}</h5>
                <h5 className={cl.text}>{type ? "+" : "-"}</h5>
                <h5 className={cl.text}>{category.toLowerCase()}</h5>
                <h5 className={cl.text}>{comment}</h5>
                <h5 className={type ? cl.sumActive : cl.sum}>{sum}</h5>
            </div>
            <div className={cl.content}>
                <Image className={cl.image} src="/svgs/edit.svg" alt="" width={14} height={14} />
                <button onClick={onClick} className={cl.button}>
                    Delete
                </button>
            </div>
        </li>
    );
};