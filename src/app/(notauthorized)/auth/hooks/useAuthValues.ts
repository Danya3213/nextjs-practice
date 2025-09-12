import {useContext} from "react";
import {AuthValues} from "@notAuthPages/auth/store/authValues";

export const useAuthValuesContext = () => {
    const context = useContext(AuthValues);
    if (!context) {
        throw new Error("useAuthValuesContext must be used within an AuthValuesProvider");
    }
    return context;
};