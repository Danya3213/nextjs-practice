import {EField} from "@notAuthPages/auth/enums/field.enum";

export interface inputsI<T> {
    [EField.name]: T,
    [EField.email]: T,
    [EField.password]: T,
    [EField.confirmPassword]: T,
}