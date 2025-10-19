import type {ReactElement} from "react";
import {ButtonLayout} from "../ButtonLayout/ButtonLayout";
import cl from './button.module.scss'
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {useModalActive} from "@hooks/useModalActive.hook";

export const Button = (): ReactElement=> {

    const {setAddTransaction}: IModalActiveContext = useModalActive();

    return (
        <ButtonLayout onClick={(): void => setAddTransaction(false)} className={cl.button}>
            Cancel
        </ButtonLayout>
    );
};