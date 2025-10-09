import type {ReactElement} from "react";
import {Chart} from "./Components/Chart/Chart";
import {Describe} from "./Components/Describe/Describet";
import {Table} from "./Components/Table/Table";
import cl from './graphic.module.scss'

export const Graphic = (): ReactElement => {

    return (
        <div className={cl.container}>
            <Describe />
            <Table/>
            <Chart/>
        </div>
    );
};