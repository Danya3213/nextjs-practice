import {useContext} from "react";
import {ModalActiveContext} from "@/stores/modalActive.store";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";

export const useModalActive = (): IModalActiveContext => {
    const context: IModalActiveContext | null = useContext(ModalActiveContext);
    if (!context) throw new Error("useModalActive must be used within a ModalActiveProvider");

    return context;
};