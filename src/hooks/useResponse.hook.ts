import {useContext} from "react";
import {ResponseContext} from "@/stores/response.store";
import type {IResponseContext} from "@/interfaces/ResponseContext.interface";

export const useResponse = (): IResponseContext => {
    const context: IResponseContext | null = useContext(ResponseContext);
    if (!context) throw new Error("useResponse must be used within an ResponseProvider");

    return context;
};