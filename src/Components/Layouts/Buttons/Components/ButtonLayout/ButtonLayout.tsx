import type {PropsWithChildren, ReactElement} from "react";
import cl from './buttonLayout.module.scss'

export const ButtonLayout = ({children, className = "", onClick = () => {}, type}: PropsWithChildren<{
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}>):ReactElement => {

    return (
        <button onClick={onClick} className={`${cl.button} ${className}`} type={type}>
            {children}
        </button>
    );
};