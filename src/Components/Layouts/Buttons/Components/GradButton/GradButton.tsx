import {ButtonLayout} from "../ButtonLayout/ButtonLayout";
import cl from './gradButton.module.scss'
import type {ReactElement} from "react";

export const GradButton = ({title, onClick = () => {}}: {
    title: string,
    onClick?: () => void,
}): ReactElement=> {

    return (
        <ButtonLayout onClick={onClick} type={"button"} className={cl.button}>
            {title}
        </ButtonLayout>
    );
};