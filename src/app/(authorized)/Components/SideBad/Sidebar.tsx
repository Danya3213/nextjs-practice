import cl from './Sidebar.module.scss';
import {Buttons} from "./Components/Buttons/Buttons";
import {Balance} from "./Components/Balance/Balance";
import {Info} from "./Components/Table/InfoList";
import {Describe} from "./Components/Describe/Describet";

export const Sidebar = () => {

    return (
        <aside className={cl.aside}>
            <div className={cl.inner}>
                <Buttons/>
                <Balance/>
                <Describe />
                <Info/>
            </div>
        </aside>
    );
};