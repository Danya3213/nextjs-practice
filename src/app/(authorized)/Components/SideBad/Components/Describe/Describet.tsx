import cl from "./describe.module.scss";

export const Describe = () => {

    return (
        <ul className={cl.describe}>
            <li className={cl.describeItem}>Currency</li>
            <li className={cl.describeItem}>Purchase</li>
            <li className={cl.describeItem}>Sale</li>
        </ul>
    );
};