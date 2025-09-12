import {createContext} from "react";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";

export const AuthValues = createContext<IAuthValuesContext | null>(null);