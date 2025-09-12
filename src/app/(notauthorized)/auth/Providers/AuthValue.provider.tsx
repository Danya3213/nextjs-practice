"use client"

import {type PropsWithChildren, type ReactNode, useState} from "react";
import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";
import {createFields} from "@notAuthPages/auth/hooks/useFields.hook";
import {AuthValues} from "@notAuthPages/auth/store/authValues.store";

export const AuthValueProvider = ({children}: Readonly<PropsWithChildren>): ReactNode => {

    const [values, setValues] = useState<IInputs<string>>({
        ...createFields<string>(""),
    });

    const [active, setActive] = useState<IInputs<boolean>>({
        ...createFields<boolean>(false),
    });

    const [errors, setErrors] = useState<IInputs<boolean>>({
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