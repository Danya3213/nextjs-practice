"use client"

import {createContext} from "react";
import type {INotificationContext} from "@/interfaces/notificationContext.interface";

export const NotificationContext = createContext<null | INotificationContext>(null)