import type {inputsI} from "@notAuthPages/auth/interfaces/inputs.interface";
import {regFields} from "@notAuthPages/auth/constants/regFields";

export function createFields<T>(value: T): inputsI<T> {

    return regFields.reduce((acc, f) => {

        return {
            ...acc,
            [f]: value
        }
    }, {} as inputsI<T>);
}