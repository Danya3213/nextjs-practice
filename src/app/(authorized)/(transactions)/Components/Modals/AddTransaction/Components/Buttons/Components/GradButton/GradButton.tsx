import type {ReactElement} from "react";
import {ButtonLayout} from "../ButtonLayout/ButtonLayout";
import cl from './gradButton.module.scss'

export const GradButton = (): ReactElement=> {

    return (
        <ButtonLayout className={cl.button}>
            Add
        </ButtonLayout>
    );
};