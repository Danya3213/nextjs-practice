import cl from "./buttons.module.scss";

export const Buttons = () => {

    return (
        <div className={cl.buttonContainer}>
            <button className={cl.buttonActive}><img className={cl.svgActive} src={"/svgs/home.svg"} alt="" width={24}/>Home</button>
            <button className={cl.button}><img className={cl.svg} src={"/svgs/timeline.svg"} alt="" width={24}/>Statistics</button>
        </div>
    );
};