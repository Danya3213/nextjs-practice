import type {ReactElement} from "react";
import {ButtonLayout} from "../ButtonLayout/ButtonLayout";
import cl from './button.module.scss'

export const Button = ({title, onClick = () => {}}: {
    title: string,
    onClick?: () => void,
}): ReactElement=> {

    return (
        <ButtonLayout type={"button"} onClick={onClick} className={cl.button}>
            {title}
        </ButtonLayout>
    );
};