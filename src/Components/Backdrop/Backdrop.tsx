import cl from "./Backdrop.module.scss";
import type {Dispatch, ReactElement, SetStateAction} from "react";

export const Backdrop = ({className = cl.backdrop, setActive}: {
    className?: string;
    setActive: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {

    return (
        <div className={className} onClick={() => setActive(false)}/>
    );
};