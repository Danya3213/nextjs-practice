import cl from "./name.module.scss";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {ReactNode} from "react";

export const Name = (): ReactNode => {

    const {name}: IUserContext = useUserInfo();

    return (
        <h4 className={cl.name}>{name}</h4>
    );
};