import cl from "./logo.module.scss";
import Image from "next/image";
import type {ReactElement} from "react";

export const Logo = (): ReactElement => {

    return (
        <div className={cl.logoContainer}>
            <Image src={"/svgs/logo.svg"} alt="logo" width={23.5} height={22.5} draggable="false" />
            <h3 className={cl.title}>Money Guard</h3>
        </div>
    );
};
