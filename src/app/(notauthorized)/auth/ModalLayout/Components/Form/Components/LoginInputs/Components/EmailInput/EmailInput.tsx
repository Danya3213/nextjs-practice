import {Input} from "../../../Layout/Input/Input";
import {validateEmail} from "@notAuthPages/auth/services/validationService";
import {useInputValues} from "@notAuthPages/auth/services/inputValues";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ETypes} from "@notAuthPages/auth/enums/types.enum";
import type {IInputValues} from "@notAuthPages/auth/interfaces/inputValues.interface";

export const EmailInput = () => {

    const {
        value,
        setValue,
        active,
        setActive,
        error,
        setError,
    }: IInputValues = useInputValues(EField.email);

    return (
        <Input placeholder={"E-mail"} img={'/svgs/mail.svg'} value={value} onChange={(e) => {
            setValue(e.target.value);
            setError(!validateEmail(e.target.value));
        }} onFocus={() => setActive(true)} active={active} error={error} type={ETypes.email} />
    );
};