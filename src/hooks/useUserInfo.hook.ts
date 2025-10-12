import {useContext} from "react";
import {UserContext} from "@/stores/userInfo.store";
import type {IUserContext} from "@/interfaces/UserContext.interface";

export const useUserInfo = (): IUserContext => {

    const context: IUserContext | null = useContext(UserContext);
    if (!context) throw new Error("useUserInfoHook must be used within an UserInfoProvider");

    return context;
};