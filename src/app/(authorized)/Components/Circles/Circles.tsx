import cl from "./Circles.module.scss";
import {Container} from "@Components/Container/Container";
import {type ReactElement, type ReactNode, useEffect, useState} from "react";

export const Circles = (): ReactNode => {

    const [ circles, setCircles ] = useState<ReactElement[]>([]);
    const circleCount: number = 5;

    useEffect((): void => {
        setCircles(Array.from({length: circleCount}).map((_, k) => (
            <div className={cl.circle} key={k}/>
        )));
    }, [])

    return (
        <Container className={cl.circleContainer}>
            {circles.map((i) => (i))}
        </Container>
    );
};