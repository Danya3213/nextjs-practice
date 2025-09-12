import cl from "./form.module.scss";
import {LoginInputs} from "./Components/LoginInputs/LoginInputs";
import {RegInputs} from "./Components/RegInputs/RegInputs";

export const Form = ({haveAccount}: {haveAccount: boolean}) => {

    return (
        <form className={cl.form}>
            {haveAccount ? (
                <LoginInputs/>
            ) : (
                <RegInputs />
            )}
        </form>
    );
};