import cl from './buttons.module.scss';
import {Button} from './Components/Button/Button';
import {GradButton} from './Components/GradButton/GradButton';
import type {ReactElement} from "react";

export const ButtonsLayout = ({topTitle, bottomTitle = "cancel", topOnClick = () => {}, bottomOnClick = () => {}}: {
    topTitle: string;
    bottomTitle?: string;
    topOnClick?: () => void;
    bottomOnClick?: () => void;
}):ReactElement => {

    return (
        <div className={cl.container}>
            <GradButton title={topTitle} onClick={topOnClick}/>
            <Button title={bottomTitle} onClick={bottomOnClick}/>
        </div>
    );
};