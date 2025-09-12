import cl from "./Circles.module.scss";
import {Container} from "@Components/Container/Container";
import {type ReactElement, useEffect, useState} from "react";

export const Circles = () => {

    const [ circles, setCircles ] = useState<ReactElement[]>([]);

    const circleCount = 5;

    useEffect(() => {
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