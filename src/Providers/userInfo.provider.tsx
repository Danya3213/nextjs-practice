"use client"

import {type PropsWithChildren, type ReactElement, useState} from "react";
import {UserContext} from "@/stores/userInfo.store";

export const UserInfoProvider = ({children}: PropsWithChildren): ReactElement => {

    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
    const [ name, setName ] = useState<string>('');

    return (
        <UserContext.Provider value = {{
            isLoggedIn,
            setIsLoggedIn,
            name,
            setName
        }}>
            {children}
        </UserContext.Provider>
    )
}