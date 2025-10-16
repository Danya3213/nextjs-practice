"use client"

import {NotificationContext} from "@/stores/notification.store";
import {type PropsWithChildren, type ReactElement, useState} from 'react'
import type {INotification} from "@/interfaces/notification.interface";
import {ENotificationType} from "@/enums/notificationsType.enum";

export const NotificationProvider = ({children}: PropsWithChildren): ReactElement => {

    const [ notifications, setNotifications ] = useState<INotification[]>([

        {
            type: ENotificationType.error,
            title: "example of error notification"
        },
        {
            type: ENotificationType.warning,
            title: "example of warning notification"
        },
        {
            type: ENotificationType.success,
            title: "example of success notification"
        },
    ]);

    const createNotification = (type: ENotificationType, title: string): void => {

        setNotifications((prev) => ([
            ...prev,
            {
                type,
                title,
            }
        ]))
    }


    return (
        <NotificationContext.Provider value={{
            createNotification,
            notifications,
            setNotifications
        }}>
            {children}
        </NotificationContext.Provider>
    );
};