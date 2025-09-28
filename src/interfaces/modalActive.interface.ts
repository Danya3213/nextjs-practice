import type {Dispatch, SetStateAction} from "react";

export interface IModalActiveContext {

    addTransaction: boolean;
    setAddTransaction: Dispatch<SetStateAction<boolean>>;
    editTransaction: boolean;
    setEditTransaction: Dispatch<SetStateAction<boolean>>;
    logOut: boolean;
    setLogOut: Dispatch<SetStateAction<boolean>>;
}