import cl from './Sidebar.module.scss';
import {Buttons} from "./Components/Buttons/Buttons";
import {Balance} from "./Components/Balance/Balance";
import {Info} from "./Components/Table/InfoList";
import {Describe} from "./Components/Describe/Describet";
import {Chart} from "./Components/Chart/Chart";
import type {ReactElement} from "react";

export const Sidebar = (): ReactElement => {

    return (
        <aside className={cl.aside}>
            <div className={cl.inner}>
                <Buttons/>
                <Balance/>
                <Describe />
                <Info/>
                <Chart/>
            </div>
        </aside>
    );
};