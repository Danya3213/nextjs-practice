"use client"

import cl from './Loading.module.scss'
import {useResponse} from "@hooks/useResponse.hook";
import type {ReactNode} from "react";
import Image from 'next/image'
import type {IResponseContext} from "@/interfaces/ResponseContext.interface";

export const Loading = (): ReactNode => {

    const {isLoading}: IResponseContext = useResponse();

    return (
        <div className={isLoading ? cl.modalActive : cl.modal}>
            <Image className={cl.img} src='/svgs/loading.svg' alt={''} width={30} height={30} />
        </div>
    )
}