"use client"

import {type ReactElement} from 'react'
import type {INotificationContext} from "@/interfaces/notificationContext.interface";
import {useNotification} from "@hooks/useNotification";
import cl from './notifications.module.scss';
import {Notification} from './Components/Notification/Notification';
import type {INotification} from "@/interfaces/notification.interface";

export const Notifications = (): ReactElement => {

    const {notifications}: INotificationContext = useNotification();

    return (
        <ul className={cl.container}>
            {notifications.map((notification: INotification, index: number) => {

                return <Notification key={index} {...notification} />
            })}
        </ul>
    );
};