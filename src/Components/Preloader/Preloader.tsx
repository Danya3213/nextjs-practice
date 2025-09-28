"use client"

import './Preloader.scss'
import {type ReactElement, useEffect, useState} from "react";

export const Preloader = (): ReactElement => {

    const [preloaderValue, setPreloaderValue] = useState<number>(0);
    const [hidden, setHidden] = useState<boolean>(false);
    const [animStatus, setAnimStatus] = useState<boolean>(false);

    useEffect(() => {
        const handlePageLoad = (): () => void => {

            type timeOutId = ReturnType<typeof setTimeout>;

            const timeout1: timeOutId = setTimeout((): () => void => {
                setHidden(true);
                const timeout2: timeOutId = setTimeout(() => {
                    // setDOMReady(true);
                }, 1000);
                return (): void => clearTimeout(timeout2);
            }, 2000);

            return (): void => clearTimeout(timeout1);
        };

        if (document.readyState === "complete") {

            handlePageLoad();
        } else {

            window.addEventListener("load", handlePageLoad);
        }

        return (): void => {
            window.removeEventListener("load", handlePageLoad);
        };
    }, []);


    useEffect((): () => void => {

        type intervalId = ReturnType<typeof setInterval>;

        const intervalId: intervalId = setInterval((): void => {
            setPreloaderValue(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(intervalId);
                    return 100;
                }
            });
        }, 1);

        return (): void => clearInterval(intervalId);
    }, []);

    useEffect((): void => {
        if (preloaderValue === 90) {
            setAnimStatus(true);
        }
    }, [preloaderValue]);

    return (
        <div className={`preloader${hidden ? ' _hidden' : ''}`}>
            <div className="loader">
                <div className="loaderIconContainer">
                    <div className={`loaderIcon${animStatus ? " _active" : ""}`}>
                    </div>
                    <div className="loaderText">
                        <h2 className="loaderBrand">Danya</h2>
                        <p className="loaderPercents">{preloaderValue}%</p>
                    </div>
                    <div className={`loaderArrow${animStatus ? " _active" : ""}`}></div>
                </div>
            </div>
        </div>
    );
};