import cl from "./button.module.scss";
import type {PropsWithChildren} from "react";

export const Button = ({onClick, children}: PropsWithChildren<{
    onClick: () => void;
}>) => {

    return (
        <button className={cl.button} onClick={onClick}>{children}</button>
    );
};