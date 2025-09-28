"use client"

import {ModalLayout} from "../ModalLayout/ModalLayout";
import {Form} from "./Components/Form/Form";
import {Title} from "./Components/Title/Title";
import {Buttons} from "./Components/Buttons/Buttons";
import type {ReactElement} from "react";
import type {IModalActiveContext} from "@/interfaces/modalActive.interface";
import {useModalActive} from "@hooks/useModalActive.hook";

export const AddTransaction = (): ReactElement => {

    const {addTransaction, setAddTransaction}:IModalActiveContext = useModalActive();

    return (
        <ModalLayout active={addTransaction} setActive={setAddTransaction}>
            <Title/>
            <Form />
            <Buttons/>
        </ModalLayout>
    );
};