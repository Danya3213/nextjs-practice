import {type Dispatch, type PropsWithChildren, type ReactElement, type SetStateAction} from "react";
import cl from './modalLayout.module.scss'
import {Backdrop} from "@Components/Backdrop/Backdrop";
import {Close} from "@authPages/(transactions)/Components/Modals/ModalLayout/Components/Close/Close";

export const ModalLayout = ({children, active, setActive}: PropsWithChildren<{
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}>): ReactElement => {

    return (
        <div className={active ? cl.modalActive : cl.modal}>
            <Backdrop setActive={setActive} />
            <div className={cl.modalInner}>
                {children}
                <Close setActive={setActive}/>
            </div>
        </div>
    );
};