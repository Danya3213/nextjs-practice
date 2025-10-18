import type {ReactElement} from "react";
import cl from './arrow.module.scss'

export const Arrow = ({active}: {
    active: boolean;
}):ReactElement => {

    return (
        <div className={active ? cl.arrowActive : cl.arrow} />
    );
};