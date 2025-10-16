import {useContext} from "react";
import {NotificationContext} from "@/stores/notification.store";
import type {INotificationContext} from "@/interfaces/notificationContext.interface";

export const useNotification = (): INotificationContext => {
    const context = useContext<INotificationContext | null>(NotificationContext);

    if (!context) throw new Error("useNotification must be used within a NotificationProvider");

    return context;
};
