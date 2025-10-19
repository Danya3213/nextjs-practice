import type {ReactElement} from "react";
import {ButtonLayout} from "../ButtonLayout/ButtonLayout";
import cl from './gradButton.module.scss'

export const GradButton = (): ReactElement=> {

    return (
        <ButtonLayout form={"Update transaction form"} type={"submit"} className={cl.button}>
            Save
        </ButtonLayout>
    );
};