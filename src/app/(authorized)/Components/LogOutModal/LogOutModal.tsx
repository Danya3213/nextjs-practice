import type {ReactElement} from "react";
import {useModalActive} from "@hooks/useModalActive.hook";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {ModalLayout} from "@authPages/(transactions)/Components/Modals/ModalLayout/ModalLayout";
import {Logo} from "@Components/Logo/Logo";
import {Title} from './Components/Title/Title';
import {Buttons} from './Components/Buttons/Buttons';

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