import cl from "./button.module.scss";
import {useAuthService} from "@api/authServices";

export const Button = () => {

    const {logout} = useAuthService();

    return (
        <button className={cl.button} onClick={() => logout(() => {})}>
            <img src={"/svgs/exit.svg"} alt=""/>
            <h4 className={cl.buttonText}>Exit</h4>
        </button>
    );
};