import {useContext} from "react";
import {AuthValues} from "@notAuthPages/auth/store/authValues.store";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";

export const useAuthValuesContext = (): IAuthValuesContext => {
    const context: IAuthValuesContext | null = useContext(AuthValues);
    if (!context) {
        throw new Error("useAuthValuesContext must be used within an AuthValuesProvider");
    }
    return context;
};