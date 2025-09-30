import type {ReactElement} from "react";
import cl from './title.module.scss'

export const Title = (): ReactElement => {

    return (
        <h4 className={cl.title}>Are you sure you want to log out?</h4>
    );
};