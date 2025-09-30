import type {ButtonHTMLAttributes, PropsWithChildren, ReactElement} from "react";
import cl from './buttonLayout.module.scss'

export const ButtonLayout = ({children, className = "", onClick = () => {}, type, form}: PropsWithChildren<{
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    form?: string;
}>):ReactElement => {

    return (
        <button onClick={onClick} className={`${cl.button} ${className}`} type={type} form={form}>
            {children}
        </button>
    );
};