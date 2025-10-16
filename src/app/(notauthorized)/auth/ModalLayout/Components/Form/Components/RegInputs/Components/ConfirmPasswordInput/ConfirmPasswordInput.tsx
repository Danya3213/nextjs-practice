import {Input} from "../../../Layout/Input/Input";
import {validateConfirmPassword} from "@notAuthPages/auth/services/validationService.service";
import {useInputValues} from "@notAuthPages/auth/services/inputValues.service";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ETypes} from "@notAuthPages/auth/enums/types.enum";
import type {IInputValues} from "@notAuthPages/auth/interfaces/inputValues.interface";
import {useEffect} from "react";

export const ConfirmPasswordInput = () => {

    const {
        value,
        setValue,
        active,
        setActive,
        error,
        setError,
    }: IInputValues = useInputValues(EField.confirmPassword);

    const {
        value: passwordValue,
    }: IInputValues = useInputValues(EField.password);

    useEffect(() => {
        setError(!validateConfirmPassword(value, passwordValue));
    }, [passwordValue]);

    return (
        <Input placeholder={"Confirm password"} img={'/svgs/lock.svg'} value={value} onChange={(e) => {
            setValue(e.target.value);
            setError(!validateConfirmPassword(e.target.value, passwordValue));
            setActive(true)
        }} onFocus={() => setActive(true)} active={active} error={error} type={ETypes.password} />
    );
};