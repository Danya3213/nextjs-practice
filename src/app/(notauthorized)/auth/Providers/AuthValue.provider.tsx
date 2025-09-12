"use client"

import {type PropsWithChildren, useState} from "react";
import type {inputsI} from "@notAuthPages/auth/interfaces/inputs.interface";
import {createFields} from "@notAuthPages/auth/hooks/useFields";
import {AuthValues} from "@notAuthPages/auth/store/authValues";

export const AuthValueProvider = ({children}: Readonly<PropsWithChildren>) => {

    const [values, setValues] = useState<inputsI<string>>({
        ...createFields<string>(""),
    });

    const [active, setActive] = useState<inputsI<boolean>>({
        ...createFields<boolean>(false),
    });

    const [errors, setErrors] = useState<inputsI<boolean>>({
        ...createFields<boolean>(true),
    });

    return (
        <AuthValues.Provider value={{

            values,
            setValues,

            active,
            setActive,

            errors,
            setErrors,
        }}>
            {children}
        </AuthValues.Provider>
    )
}