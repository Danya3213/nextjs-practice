import {Input} from "../../../Layout/Input/Input";
import {validateName} from "@notAuthPages/auth/services/validationService";
import {useInputValues} from "@notAuthPages/auth/services/inputValues";
import {EField} from "@notAuthPages/auth/enums/field.enum";
import {ETypes} from "@notAuthPages/auth/enums/types.enum";


export const NameInput = () => {

    const {
        value,
        setValue,
        active,
        setActive,
        error,
        setError,
    } = useInputValues(EField.name);

    return (
        <Input placeholder={"Name"} img={'/svgs/user.svg'} value={value} onChange={(e) => {
            setValue(e.target.value);
            setError(!validateName(e.target.value));
        }} onFocus={() => setActive(true)} active={active} error={error} type={ETypes.input} />
    );
};