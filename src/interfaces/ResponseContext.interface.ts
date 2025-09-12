import type {Dispatch, SetStateAction} from "react";

export interface IResponseContext {
    isLoading: number;
    setIsLoading: Dispatch<SetStateAction<number>>;
}