import {useAuthValuesContext} from "@notAuthPages/auth/hooks/useAuthValues";
import type {EField} from "@notAuthPages/auth/enums/field.enum";
import type {Dispatch, SetStateAction} from "react";
import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";
import type {IInputValues} from "@notAuthPages/auth/interfaces/inputValues.interface";

export const useInputValues = (key: EField): IInputValues => {

    const handleChangeState = <T>(hook: Dispatch<SetStateAction<IInputs<T>>>, value: T) => {

        hook((prev:IInputs<T>) => ({
            ...prev,
            [key]: value
        }))
    }

    const {
        values,
        setValues,
        active,
        setActive,
        errors,
        setErrors
    }: IAuthValuesContext = useAuthValuesContext();

    const setValueI = (v: string) => handleChangeState<string>(setValues, v);
    const setActiveI = (v: boolean) => handleChangeState<boolean>(setActive, v);
    const setErrorI = (v: boolean) => handleChangeState<boolean>(setErrors, v);

    const valueI = values[key];
    const activeI = active[key];
    const errorI = errors[key];

    return {
        value: valueI,
        setValue: setValueI,
        active: activeI,
        setActive: setActiveI,
        error: errorI,
        setError: setErrorI,
        handleChangeState,
    }
}