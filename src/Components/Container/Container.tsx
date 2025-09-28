import cl from './Container.module.scss'
import type {PropsWithChildren, ReactElement} from "react";

export const Container = ({children, className = ''}: PropsWithChildren<{
    className?: string;
}>): ReactElement => {

    return (
        <div className={`${cl.container} ${className}`}>
            {children}
        </div>
    );
};