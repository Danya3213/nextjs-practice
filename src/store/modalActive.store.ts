"use client"

import {createContext} from "react";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";

export const ModalActiveContext = createContext<IModalActiveContext | null>(null)