"use client"

import {type PropsWithChildren, useState} from "react";
import {UserContext} from "@store/userInfo.store";

export const UserInfoProvider = ({children}: PropsWithChildren) => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ name, setName ] = useState('');

    return (
        <UserContext.Provider value = {{isLoggedIn, setIsLoggedIn, name, setName}}>
            {children}
        </UserContext.Provider>
    )
}