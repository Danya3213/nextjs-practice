import cl from './buttons.module.scss'
import {GradientButton} from "./GradButton/GradientButton";
import {Button} from "./Button/Button";
import {useModalActive} from "@hooks/useModalActive.hook";
import {useAuthService} from "@api/authServices.api";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import type {IAuthService} from "@notAuthPages/auth/interfaces/authService.interface";
import type {ReactElement} from "react";

export const Buttons = (): ReactElement => {

    const {setLogOut}: IModalActiveContext = useModalActive()
    const {logout}: IAuthService = useAuthService();

    return (
        <div className={cl.container}>
            <GradientButton onClick={() => logout(():void => {setLogOut(false)})}>Logout</GradientButton>
            <Button onClick={():void => setLogOut(false)}>Cancel</Button>
        </div>
    );
};