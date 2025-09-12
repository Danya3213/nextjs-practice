import {LoginInputs} from "../LoginInputs/LoginInputs";
import {NameInput} from "./Components/NameInput/NameInput";
import {ConfirmPasswordInput} from "./Components/ConfirmPasswordInput/ConfirmPasswordInput";

export const RegInputs = () => {

    return (
        <>
            <NameInput/>
            <LoginInputs/>
            <ConfirmPasswordInput/>
        </>
    );
};