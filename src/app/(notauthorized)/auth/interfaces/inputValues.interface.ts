import type {Dispatch, SetStateAction} from "react";
import type {IInputs} from "@notAuthPages/auth/interfaces/inputs.interface";

export interface IInputValues {
    value: string;
    active: boolean;
    error: boolean;
    setValue: (v: string) => void;
    setActive: (v: boolean) => void;
    setError: (v: boolean) => void;
    handleChangeState: <T>(hook: Dispatch<SetStateAction<IInputs<T>>>, value: T) => void
}