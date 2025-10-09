import cl from "./balance.module.scss";
import type {ReactElement} from "react";

export const Balance = (): ReactElement => {

    return (
        <div className={cl.rowColored}>
            <h5 className={cl.balanceText}>Your balance</h5>
            <h3 className={cl.balance}><span>₴</span> 24 000.00</h3>
        </div>
    );
};