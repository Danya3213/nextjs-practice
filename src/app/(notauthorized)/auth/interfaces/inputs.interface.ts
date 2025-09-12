import {EField} from "@notAuthPages/auth/enums/field.enum";

export interface inputsI<T> {
    [EField.username]: T,
    [EField.email]: T,
    [EField.password]: T,
    [EField.confirmPassword]: T,
}
