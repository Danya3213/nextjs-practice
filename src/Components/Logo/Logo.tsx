import cl from "./logo.module.scss";
import Image from "next/image";

export const Logo = () => {

    return (
        <div>
            <Image src={'/svgs/logo.svg'} className={"h-36"} alt={'logo'} width={36} height={36} draggable="false" />
            <h3 className={cl.title}>Money Guard</h3>
        </div>
    );
};