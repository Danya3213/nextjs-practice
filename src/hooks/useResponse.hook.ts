import {useContext} from "react";
import {ResponseContext} from "@store/response.store";
import type {ResponseContextI} from "@/interfaces/IResponseContext";

export const useResponse = (): ResponseContextI => {
    const context = useContext(ResponseContext);
    if (!context) throw new Error("useResponse must be used within an ResponseProvider");

    return context;
};