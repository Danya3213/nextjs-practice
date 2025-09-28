import type {Dispatch, ReactElement, SetStateAction} from "react";
import cl from './close.module.scss'

export const Close = ({setActive}: {
    setActive: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {

    return (<button className={cl.close} onClick={():void => setActive(false)} />);
};