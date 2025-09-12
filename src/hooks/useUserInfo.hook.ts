import {useContext} from "react";
import {UserContext} from "@store/userInfo.store";
import type {IUserContext} from "@/interfaces/UserContext";

export const useUserInfo = (): IUserContext => {

    const context = useContext(UserContext);
    if (!context) throw new Error("useUserInfoHook must be used within an UserInfoProvider");

    return context;
};