"use client"

import {createContext} from "react";
import type {IUserContext} from "@/interfaces/UserContext";

export const UserContext = createContext<IUserContext | null>(null);