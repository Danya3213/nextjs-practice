import cl from "./form.module.scss";
import {LoginInputs} from "./Components/LoginInputs/LoginInputs";
import {RegInputs} from "./Components/RegInputs/RegInputs";
import type {KeyboardEvent} from "react";
import {useButtonService} from "@notAuthPages/auth/services/buttonService.service";

export const Form = ({haveAccount}: {haveAccount: boolean}) => {

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
        </form>
    );
};