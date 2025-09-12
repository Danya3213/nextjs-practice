import cl from './Loading.module.scss'
import {useResponse} from "@hooks/useResponse.hook";
import type {ReactNode} from "react";
import Image from 'next/image'

export const Loading = (): ReactNode => {

    const {isLoading} = useResponse();

    return (
        <div className={isLoading ? cl.modalActive : cl.modal}>
            <Image src='/svgs/loading.svg' alt={''} width={30} height={30} />
        </div>
    )
}