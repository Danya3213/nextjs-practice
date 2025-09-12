import cl from './text.module.scss'
import type {PropsWithChildren} from "react";

export const Text = ({children}: PropsWithChildren) => {

    return (
        <h3 className={cl.text}>
            {children}
        </h3>
    );
};