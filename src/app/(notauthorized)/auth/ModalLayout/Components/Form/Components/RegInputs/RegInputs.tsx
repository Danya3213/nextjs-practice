import {LoginInputs} from "../LoginInputs/LoginInputs";
import {UsernameInput} from "./Components/NameInput/NameInput";
import {ConfirmPasswordInput} from "./Components/ConfirmPasswordInput/ConfirmPasswordInput";

export const RegInputs = () => {

    return (
        <>
            <UsernameInput/>
            <LoginInputs/>
            <ConfirmPasswordInput/>
        </>
    );
};