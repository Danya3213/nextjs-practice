import cl from "./input.module.scss";
import Image from "next/image";
import type {ChangeEvent} from "react";
import type {ETypes} from "@notAuthPages/auth/enums/types.enum";

export const Input = ({placeholder, img, value, onChange, onFocus, active, error, type}: {
    placeholder: string;
    img: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    active: boolean;
    error: boolean;
    type: ETypes;
}) => {

    return (
        <label className={
            error && active ? cl.labelError : cl.label
        }>
            <Image src={img} alt="mail" width={24} height={24} draggable="false" />
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                type={type}
            />
        </label>
    );
};