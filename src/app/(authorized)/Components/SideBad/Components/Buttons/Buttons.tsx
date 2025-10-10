import cl from "./buttons.module.scss";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation";
import type {ReactElement} from "react";
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Buttons = (): ReactElement => {

    const router: AppRouterInstance = useRouter();
    const pathname: string = usePathname();

    const checkIsMainPage = (): boolean => {

        return pathname === "/";
    }

    const goToPage = (v: string): void => {

        router.replace(v);
    };

    return (
        <div className={cl.buttonContainer}>
            <button className={checkIsMainPage() ? cl.buttonActive : cl.button} onClick={() => goToPage("/")}><Image className={checkIsMainPage() ? cl.svgActive : ""} src={checkIsMainPage() ? "/svgs/homeActive.svg" : "/svgs/home.svg"} alt="" width={24} height={24} draggable="false"/>Home</button>
            <button className={!checkIsMainPage() ? cl.buttonActive : cl.button} onClick={() => goToPage("statistics")}><Image className={!checkIsMainPage() ? cl.svgActive : ""} src={!checkIsMainPage() ? "/svgs/timelineActive.svg" : "/svgs/timeline.svg"} alt="" width={24} height={24} draggable="false"/>Statistics</button>
        </div>
    );
};