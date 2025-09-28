import type {ReactElement} from "react";
import cl from './buttons.module.scss';
import {Button} from './Components/Button/Button';
import {GradButton} from './Components/GradButton/GradButton';

export const Buttons = ():ReactElement => {

    return (
        <div className={cl.container}>
            <GradButton/>
            <Button/>
        </div>
    );
};