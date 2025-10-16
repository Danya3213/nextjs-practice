import {Input} from "../../../Layout/Input/Input";
import {validateUsername} from "@notAuthPages/auth/services/validationService.service";
import {useInputValues} from "@notAuthPages/auth/services/inputValues.service";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ETypes} from "@notAuthPages/auth/enums/types.enum";
import type {IInputValues} from "@notAuthPages/auth/interfaces/inputValues.interface";


export const UsernameInput = () => {

    const {
        value,
        setValue,
        active,
        setActive,
        error,
        setError,
    }: IInputValues = useInputValues(EField.username);

    return (
        <Input placeholder={"Name"} img={'/svgs/user.svg'} value={value} onChange={(e) => {
            setValue(e.target.value);
            setError(!validateUsername(e.target.value));
            setActive(true)
        }} onFocus={() => setActive(true)} active={active} error={error} type={ETypes.input} />
    );
};