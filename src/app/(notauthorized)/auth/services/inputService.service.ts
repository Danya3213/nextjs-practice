import {useAuthValuesContext} from "@notAuthPages/auth/hooks/useAuthValues.hook";
import {createFields} from "@notAuthPages/auth/hooks/useFields.hook";
import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {loginFields} from "@notAuthPages/auth/constants/loginFields";
import {regFields} from "@notAuthPages/auth/constants/regFields";
import type {IInputService} from "@notAuthPages/auth/interfaces/inputService.interface";

export const useInputService = (): IInputService => {

    const {active, errors, setValues, setActive, setErrors}: IAuthValuesContext = useAuthValuesContext();

    const checkFields = (f: EField[], obj: IInputs<boolean>, v: boolean): boolean => {

        return f.every((k: EField) => obj[k] === v);
    }

    const checkActive = (f: EField[]): boolean => {

        return checkFields(f, active, true);
    }

    const checkErrors = (f: EField[]): boolean => {

        return checkFields(f, errors, false);
    }

    const isEverythingOk = (haveAccount: boolean): boolean => {
        if (haveAccount) {

            return checkActive(loginFields) && checkErrors(loginFields);

        } else {

            return checkActive(regFields) && checkErrors(regFields);
        }
    }

    const activateAll = (): void => {

        const allTrue: IInputs<true> = Object.values(EField).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {} as IInputs<true>);


        setActive(allTrue);
    }

    const resetAll = (): void => {

        setValues({
            ...createFields<string>(""),
        });

        setActive({
            ...createFields<boolean>(false),
        });

        setErrors({
            ...createFields<boolean>(true),
        });
    }

    return {
        isEverythingOk,
        activateAll,
        resetAll
    }
}