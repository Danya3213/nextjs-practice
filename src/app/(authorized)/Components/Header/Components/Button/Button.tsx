import cl from "./button.module.scss";
import type {ReactElement} from "react";
import Image from "next/image";
import {useModalActive} from "@hooks/useModalActive.hook";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";

export const Button = (): ReactElement => {

    const {setLogOut}: IModalActiveContext = useModalActive()



    return (
        <button className={cl.button} onClick={(): void => setLogOut(true)}>
            <Image src={"/svgs/exit.svg"} alt="exit" width={18} height={18} draggable="false"/>
            <h4 className={cl.buttonText}>Exit</h4>
        </button>
    );
};