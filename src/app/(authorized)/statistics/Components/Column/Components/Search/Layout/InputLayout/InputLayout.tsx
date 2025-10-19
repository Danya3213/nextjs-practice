import {type Dispatch, type ReactElement, type SetStateAction, useState} from "react";
import cl from "./inputLayout.module.scss";
import type {EMonths} from "@authPages/statistics/enums/months.enum";

export const InputLayout = <T extends EMonths | number | "">({data, value, setValue}: {
    data: T[];
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
}): ReactElement => {

    const [ active, setActive ] = useState<boolean>(false);

    function handleOnChange (value: T) {

        setValue(value);
        setActive(false);
    }

    return (
        <div className={cl.button} onClick={(): void => setActive(!active)}>
            <h3>{value}</h3>
            <button className={active ? cl.arrowActive : cl.arrow} />
            <ul className={active ? cl.listActive : cl.list}>
                {data.map((value: T, key: number) => (
                    <li key={`value${key}`} onClick={(): void => handleOnChange(value)}>{value !== 0 ? value : ""}</li>
                ))}
            </ul>
        </div>
    );
};