import type {ENotificationType} from "@/enums/notificationsType.enum";
import type {Dispatch, SetStateAction} from "react";
import type {INotification} from "@/interfaces/notification.interface";

export interface INotificationContext {

    createNotification: (type: ENotificationType, title: string) => void;
    notifications: INotification[];
    setNotifications: Dispatch<SetStateAction<INotification[]>>;
}