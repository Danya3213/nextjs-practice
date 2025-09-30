import cl from './modalLayout.module.scss'
import {Logo} from "@Components/Logo/Logo";
import {Form} from "@notAuthPages/auth/ModalLayout/Components/Form/Form";
import {Buttons} from "@notAuthPages/auth/ModalLayout/Components/Buttons/Buttons";
import type {Dispatch, SetStateAction} from "react";

export const ModalLayout = ({active, haveAccount, setHaveAccount}: {active: boolean, haveAccount: boolean, setHaveAccount: Dispatch<SetStateAction<boolean>>}) => {
    const className = () => {

        if (haveAccount) {

            if (active) {

                return cl.innerLoginActive
            } else {

                return cl.innerLogin
            }
        } else {

            if (active) {

                return cl.innerRegActive
            } else {

                return cl.innerReg
            }
        }
    }

    return (
        <div className={className()}>
            <Logo/>
            <Form haveAccount={haveAccount}/>
            <Buttons haveAccount={haveAccount} setHaveAccount={setHaveAccount} />
        </div>
    );
};