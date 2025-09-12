import cl from './Container.module.scss'
import type {PropsWithChildren, ReactNode} from "react";

export const Container = ({children, className = ''}: PropsWithChildren<{
    className?: string;
}>): ReactNode => {

    return (
        <div className={`${cl.container} ${className}`}>
            {children}
        </div>
    );
};