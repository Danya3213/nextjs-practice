"use client"

import {createContext} from "react";
import type {ResponseContextI} from "@/interfaces/IResponseContext";


export const ResponseContext = createContext<ResponseContextI | null>(null);