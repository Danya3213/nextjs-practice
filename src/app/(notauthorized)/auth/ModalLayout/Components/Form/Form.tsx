import cl from "./form.module.scss";
import {LoginInputs} from "./Components/LoginInputs/LoginInputs";
import {RegInputs} from "./Components/RegInputs/RegInputs";
import type {Dispatch, KeyboardEvent, SetStateAction} from "react";
import {useButtonService} from "@notAuthPages/auth/services/buttonService.service";
import {ButtonsLayout} from "@Components/Layouts/Buttons/Buttons";

export const Form = ({haveAccount, setHaveAccount}: {haveAccount: boolean, setHaveAccount: Dispatch<SetStateAction<boolean>>}) => {

    const {handleLogin, handleReg} = useButtonService();

    const handleKeyDown = async (e:KeyboardEvent<HTMLFormElement>): Promise<void> => {
        if (e.key === "Enter") {

            if (haveAccount) {
                await handleLogin();
            } else {
                await handleReg();
            }
        }
    };

    return (
        <form className={cl.form} onKeyDown={handleKeyDown}>
            {haveAccount ? (
                <LoginInputs/>
            ) : (
                <RegInputs />
            )}
            {haveAccount ? (
                <ButtonsLayout topTitle={"log in"} bottomTitle={"register"} topOnClick={handleLogin} bottomOnClick={() => setHaveAccount(false)}/>
            ): (
                <ButtonsLayout topTitle={"register"} bottomTitle={"log in"} topOnClick={handleReg} bottomOnClick={() => setHaveAccount(true)}/>
            )}
        </form>
    );
};