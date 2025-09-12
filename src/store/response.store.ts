"use client"

import {createContext} from "react";
import type {IResponseContext} from "@/interfaces/ResponseContext.interface";


export const ResponseContext = createContext<IResponseContext | null>(null);