import type {ENotificationType} from "@/enums/notificationsType.enum";

export interface INotification {

    type: ENotificationType;
    title: string;
    isHidden: boolean;
}