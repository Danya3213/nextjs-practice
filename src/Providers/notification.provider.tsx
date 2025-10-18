"use client"

import {NotificationContext} from "@/stores/notification.store";
import {ENotificationType} from "@/enums/notificationsType.enum";
import {type PropsWithChildren, type ReactElement, useEffect, useState} from 'react'
import type {TTimeout} from "@/types/timeout.type";
import type {INotification} from "@/interfaces/notification.interface";

export const NotificationProvider = ({children}: PropsWithChildren): ReactElement => {

    const [notifications, setNotifications] = useState<INotification[]>([]);

    useEffect((): undefined | (() => void) => {

        if (notifications.length === 0) return;

        const timeout: TTimeout = setTimeout((): void => {

            if (notifications.every((notif: INotification) => notif.isHidden)) {

                setNotifications([])
            }
        }, 500)

        return (): void => clearTimeout(timeout);

    }, [notifications]);

    useEffect((): void => {

        if (notifications.length === 0) return;

        notifications.forEach((notification: INotification) => {

            if (!notification.isHidden) {
                const timeout: TTimeout = setTimeout((): void => {

                    setNotifications((prev: INotification[]) =>
                        prev.map((n: INotification) =>
                            n === notification ? { ...n, isHidden: true } : n
                        )
                    );
                }, 1500);

                return (): void => clearTimeout(timeout);
            }
        });

    }, [notifications]);

    const createNotification = (type: ENotificationType, title: string): void => {

        setNotifications((prev: INotification[]) => ([
            ...prev,
            {
                type,
                title,
                isHidden: false,
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