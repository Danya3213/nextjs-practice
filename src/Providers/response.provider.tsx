"use client"

import {type PropsWithChildren, useState} from "react";
import {ResponseContext} from "@store/response.store";

export const ResponseProvider = ({children}: PropsWithChildren) => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    return (
        <ResponseContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </ResponseContext.Provider>
    )
}