import type {PropsWithChildren, ReactElement} from "react";
import cl from './buttonLayout.module.scss'

export const ButtonLayout = ({children, className = "", onClick = () => {}}: PropsWithChildren<{
    className?: string;
    onClick?: () => void;
}>):ReactElement => {

    return (
        <button onClick={onClick} className={`${cl.button} ${className}`}>
            {children}
        </button>
    );
};