import cl from "./buttons.module.scss";
import Image from "next/image";
import type {ReactElement} from "react";

export const Buttons = (): ReactElement => {

    return (
        <div className={cl.buttonContainer}>
            <button className={cl.buttonActive}><Image className={cl.svgActive} src={"/svgs/home.svg"} alt="" width={24} height={24} draggable="false"/>Home</button>
            <button className={cl.button}><Image className={cl.svg} src={"/svgs/timeline.svg"} alt="" width={24} height={24} draggable="false"/>Statistics</button>
        </div>
    );
};