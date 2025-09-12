import cl from "./Backdrop.module.scss";

export const Backdrop = ({className = cl.backdrop, setActive}) => {

    return (
        <div className={className} onClick={() => setActive(false)} />
    );
};