import {createContext} from "react";
import type {AuthValuesContextI} from "@notAuthPages/auth/interfaces/authContext.interface";

export const AuthValues = createContext<AuthValuesContextI | null>(null);