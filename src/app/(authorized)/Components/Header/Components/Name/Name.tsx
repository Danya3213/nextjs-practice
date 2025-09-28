import cl from "./name.module.scss";
import {useUserInfo} from "@hooks/useUserInfo.hook";
import type {IUserContext} from "@/interfaces/UserContext.interface";
import type {ReactElement} from "react";

export const Name = (): ReactElement => {

    const {name}: IUserContext = useUserInfo();

    return (
        <h4 className={cl.name}>{name}</h4>
    );
};