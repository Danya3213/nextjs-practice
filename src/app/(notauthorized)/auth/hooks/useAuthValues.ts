import {useContext} from "react";
import {AuthValues} from "@notAuthPages/auth/store/authValues";
import type {IAuthValuesContext} from "@notAuthPages/auth/interfaces/authContext.interface";

export const useAuthValuesContext = (): IAuthValuesContext => {
    const context: IAuthValuesContext = useContext(AuthValues);
    if (!context) {
        throw new Error("useAuthValuesContext must be used within an AuthValuesProvider");
    }
    return context;
};