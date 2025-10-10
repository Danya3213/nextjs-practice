"use client"

import {type ReactElement, useState} from "react";

export const Year = (): ReactElement => {

    const [ year, setYear ] = useState<number>(2025);
    const [ active, setActive ] = useState<boolean>(false);

    const years = [2025, 2024, 2023, 2022, 2021]

    return (
        <>
            <div>
                <h3>{year}</h3>
                <button />
            </div>
            <ul>
                {years.map((year, key) => (
                    <li key={`yearI${key}`}>{year}</li>
                ))}
            </ul>
        </>
    );
};