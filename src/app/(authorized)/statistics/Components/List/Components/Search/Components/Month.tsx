"use client"

import {type ReactElement, useState} from "react";

export const Month = (): ReactElement => {

    const [ month, setMonth ] = useState<string>('January');

    return (
        <>
            <input
                value={month}
                onChange={(e) => {
                    setMonth(e.target.value);
                }}
            />
        </>
    );
};