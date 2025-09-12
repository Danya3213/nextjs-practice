import cl from "./infoListItem.module.scss";
import type {PropsWithChildren} from "react";

export const InfoListItem = ({children}: PropsWithChildren) => {

    return (
        <li className={cl.infoListItem}>
            {children}
        </li>
    );
};