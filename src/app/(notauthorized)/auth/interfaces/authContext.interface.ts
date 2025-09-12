import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";
import type {Dispatch, SetStateAction} from "react";

export interface IAuthValuesContext {
    values: IInputs<string>;
    setValues: Dispatch<SetStateAction<IInputs<string>>>;

    active: IInputs<boolean>;
    setActive: Dispatch<SetStateAction<IInputs<boolean>>>;

    errors: IInputs<boolean>;
    setErrors: Dispatch<SetStateAction<IInputs<boolean>>>;
}