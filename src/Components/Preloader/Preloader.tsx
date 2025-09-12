import './Preloader.scss'
import {useEffect, useState} from "react";
import {useUserInfo} from "../Contexts/UserInfo/userInfo.provider.tsx";

export const Preloader = () => {

    const {firstJoin, setFirstJoin} = useUserInfo();
    const [preloaderValue, setPreloaderValue] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [animStatus, setAnimStatus] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => {

            const timeout1 = setTimeout(() => {
                setHidden(true);
                const timeout2 = setTimeout(() => {
                    // setDOMReady(true);
                }, 1000);
                return () => clearTimeout(timeout2);
            }, 2000);

            return () => clearTimeout(timeout1);
        };

        if (document.readyState === "complete") {

            handlePageLoad();
        } else {

            window.addEventListener("load", handlePageLoad);
        }

        return () => {
            window.removeEventListener("load", handlePageLoad);
        };
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setPreloaderValue(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(intervalId);
                    return 100;
                }
            });
        }, 1);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
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