import {Input} from "../../../Layout/Input/Input";
import {validatePassword} from "@notAuthPages/auth/services/validationService.service";
import {useInputValues} from "@notAuthPages/auth/services/inputValues.service";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ETypes} from "@notAuthPages/auth/enums/types.enum";
import type {IInputValues} from "@notAuthPages/auth/interfaces/inputValues.interface";


export const PasswordInput = () => {

    const {
        value,
        setValue,
        active,
        setActive,
        error,
        setError,
    }: IInputValues = useInputValues(EField.password);

    return (
        <Input placeholder={"Password"} img={'/svgs/lock.svg'} value={value} onChange={(e) => {
            setValue(e.target.value);
            setError(!validatePassword(e.target.value));
        }} onFocus={() => setActive(true)} active={active} error={error} type={ETypes.password} />
    );
};