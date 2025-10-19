"use client"

import {ModalLayout} from "../ModalLayout/ModalLayout";
import {Form} from "./Components/Form/Form";
import {Title} from "./Components/Title/Title";
import {Buttons} from "./Components/Buttons/Buttons";
import type {ReactElement} from "react";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {useModalActive} from "@hooks/useModalActive.hook";

export const EditTransaction = (): ReactElement => {

    const {editTransaction, setEditTransaction}:IModalActiveContext = useModalActive();

    return (
        <ModalLayout active={editTransaction} setActive={setEditTransaction}>
            <Title/>
            <Form />
            <Buttons/>
        </ModalLayout>
    );
};