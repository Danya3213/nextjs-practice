import {type ReactElement} from 'react'
import cl from './list.module.scss'
import {ListItem} from '../ListItem/ListItem'
import {ECategory} from "@authPages/enums/category.enum";
import type {IChangedTransaction} from "@authPages/interfaces/changedTransaction";

export const List = ({transactions}: {
    transactions: IChangedTransaction[],
}): ReactElement => {

    return (
        <>
            <div className={cl.row}>
                <h3 className={cl.title}>Category</h3>
                <h3 className={cl.title}>Sum</h3>
            </div>
            <ul className={cl.ul}>
                {transactions.map((trans) => {

                    return <ListItem key={trans._id} color={trans.color} category={trans.category} sum={trans.sum} />
                })}
            </ul>
        </>
    );
};