import cl from './Sidebar.module.scss';
import {Buttons} from "./Components/Buttons/Buttons";
import {Balance} from "./Components/Balance/Balance";
import type {ReactElement} from "react";
import {Graphic} from "./Components/Graphic/Graphic";

export const Sidebar = (): ReactElement => {

    return (
        <aside className={cl.aside}>
            <div className={cl.inner}>
                <Buttons/>
                <Balance/>
                <Graphic/>
            </div>
        </aside>
    );
};