import {useContext} from "react";
import {UserContext, type UserContextI} from "@store/userInfo.store";

export const useUserInfo = (): UserContextI => {

    const context = useContext(UserContext);
    if (!context) throw new Error("useUserInfoHook must be used within an UserInfoProvider");

    return context;
};