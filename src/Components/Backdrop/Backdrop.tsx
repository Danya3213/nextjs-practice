import cl from "./Backdrop.module.scss";
import type {Dispatch, ReactNode, SetStateAction} from "react";

export const Backdrop = ({className = cl.backdrop, setActive}: {
    className: string;
    setActive: Dispatch<SetStateAction<boolean>>;
}): ReactNode => {

    return (
        <div className={className} onClick={() => setActive(false)} />
    );
};