"use client"

import {type PropsWithChildren, type ReactElement, useState} from "react";
import {ResponseContext} from "@/stores/response.store";

export const ResponseProvider = ({children}: PropsWithChildren): ReactElement => {

    const [ isLoading, setIsLoading ] = useState<number>(0);

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