import cl from "./Backdrop.module.scss";
import type {Dispatch, ReactElement, SetStateAction} from "react";

export const Backdrop = ({className = "", active, setActive}: {
    className?: string;
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {

    return (
        <div className={`${active ? cl.backdropActive : cl.backdrop} ${className}`} onClick={() => setActive(false)}/>
    );
};