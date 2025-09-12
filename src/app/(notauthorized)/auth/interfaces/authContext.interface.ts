import type {inputsI} from "@notAuthPages/auth/interfaces/inputs.interface";
import type {Dispatch, SetStateAction} from "react";

export interface AuthValuesContextI {
    values: inputsI<string>;
    setValues: Dispatch<SetStateAction<inputsI<string>>>;

    active: inputsI<boolean>;
    setActive: Dispatch<SetStateAction<inputsI<boolean>>>;

    errors: inputsI<boolean>;
    setErrors: Dispatch<SetStateAction<inputsI<boolean>>>;
}