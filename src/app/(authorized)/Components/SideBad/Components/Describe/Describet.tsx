import cl from "./describe.module.scss";
import type {ReactElement} from "react";

export const Describe = (): ReactElement => {

    return (
        <ul className={cl.describe}>
            <li className={cl.describeItem}>Currency</li>
            <li className={cl.describeItem}>Purchase</li>
            <li className={cl.describeItem}>Sale</li>
        </ul>
    );
};