import cl from "./infoList.module.scss";
import type {PropsWithChildren} from "react";

export const InfoList = ({children}: PropsWithChildren) => {

    return (
        <ul className={cl.infoList}>
            {children}
        </ul>
    );
};