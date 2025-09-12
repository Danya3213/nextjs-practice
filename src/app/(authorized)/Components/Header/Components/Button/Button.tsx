import cl from "./button.module.scss";
import {useAuthService} from "@api/authServices";
import type {ReactNode} from "react";
import Image from "next/image";
import type {IAuthService} from "@notAuthPages/auth/interfaces/authService.interface";

export const Button = (): ReactNode => {

    const {logout}: IAuthService = useAuthService();

    return (
        <button className={cl.button} onClick={(): Promise<void> => logout((): void => {})}>
            <Image src={"/svgs/exit.svg"} alt="exit" width={18} height={18} draggable="false"/>
            <h4 className={cl.buttonText}>Exit</h4>
        </button>
    );
};