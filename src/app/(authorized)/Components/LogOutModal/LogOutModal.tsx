import {useModalActive} from "@hooks/useModalActive.hook";
import {ModalLayout} from "@authPages/(transactions)/Components/Modals/ModalLayout/ModalLayout";
import {Logo} from "@Components/Logo/Logo";
import {Title} from './Components/Title/Title';
import {Buttons} from './Components/Buttons/Buttons';
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import type {ReactElement} from "react";

export const LogOutModal = (): ReactElement => {

    const {logOut, setLogOut}: IModalActiveContext = useModalActive()

    return (
        <ModalLayout active={logOut} setActive={setLogOut}>
            <Logo/>
            <Title/>
            <Buttons/>
        </ModalLayout>
    );
};