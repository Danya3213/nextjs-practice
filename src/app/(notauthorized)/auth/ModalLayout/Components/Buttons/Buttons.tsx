import cl from "./buttons.module.scss";
import {useButtonService} from "@notAuthPages/auth/services/buttonService";
import {GradientButton} from "./Components/GradientButton/GradientButton";
import {Button} from "./Components/Button/Button";
import type {Dispatch, SetStateAction} from "react";

export const Buttons = ({setHaveAccount, haveAccount}: {setHaveAccount: Dispatch<SetStateAction<boolean>>, haveAccount: boolean}) => {

    const {handleLogin, handleReg} = useButtonService();

    return (
        <div className={cl.buttonContainer}>
            {
                haveAccount ? (
                    <>
                        <GradientButton onClick={handleLogin}>Log in</GradientButton>
                        <Button onClick={() => setHaveAccount(false)}>Register</Button>
                    </>
                ) : (
                    <>
                        <GradientButton onClick={handleReg}>Register</GradientButton>
                        <Button onClick={() => setHaveAccount(true)}>Log in</Button>
                    </>
                )
            }
        </div>
    );
};