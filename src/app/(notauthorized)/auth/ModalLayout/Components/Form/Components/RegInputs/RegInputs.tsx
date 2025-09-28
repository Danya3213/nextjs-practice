import {LoginInputs} from "../LoginInputs/LoginInputs";
import {UsernameInput} from "./Components/NameInput/NameInput";
import {ConfirmPasswordInput} from "./Components/ConfirmPasswordInput/ConfirmPasswordInput";
import type {ReactElement} from "react";

export const RegInputs = (): ReactElement => {

    return (
        <>
            <UsernameInput/>
            <LoginInputs/>
            <ConfirmPasswordInput/>
        </>
    );
};