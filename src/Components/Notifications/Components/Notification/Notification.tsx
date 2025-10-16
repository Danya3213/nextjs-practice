import type {ReactElement} from "react";
import {type ENotificationType} from "@/enums/notificationsType.enum";
import cl from './notification.module.scss'
import Image from "next/image";

export const Notification = ({type, title}: {
    type: ENotificationType,
    title: string
}): ReactElement => {
    return (
        <li className={cl.modal}>
            <div className={cl.topRow}>
                <Image src={`/svgs/${type.toLowerCase()}.svg`} alt={''} width={36} height={36} />
                <h4 className={`${cl.type}${type}`}>{type.toLowerCase()}</h4>
            </div>
            <h5 className={cl.title}>{title}</h5>
        </li>
    );
};