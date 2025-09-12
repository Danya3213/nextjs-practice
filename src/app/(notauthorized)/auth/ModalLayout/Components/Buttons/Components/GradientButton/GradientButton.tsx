import cl from "./gradient.module.scss";
import type {PropsWithChildren} from "react";

export const GradientButton = ({onClick, children}: PropsWithChildren<{
    onClick: () => void;
}>) => {

    return (
        <button className={cl.buttonGradient} onClick={onClick}>{children}</button>
    );
};