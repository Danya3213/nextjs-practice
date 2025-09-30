import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import axios, {type AxiosInstance} from "axios";
import {useServiceLayout} from "@api/serviceLayout.api";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";

export const useTransactionService = (): ITransactionService => {

    const {serviceLayout} = useServiceLayout();

    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEST_URL}/trans`,
        withCredentials: true,
    })

    async function getTransactions(): Promise<ITransaction[] | undefined> {
        return serviceLayout<ITransaction[]>(async (): Promise<ITransaction[]> => {

            const { data }: {data: ITransaction[] | undefined} = await authApi.get<ITransaction[]>("/all");
            return data;
        });
    }

    async function createTransaction(trans: Omit<ITransaction, "_id">): Promise<ITransaction | undefined> {
        return serviceLayout<ITransaction | undefined>(async (): Promise<ITransaction | undefined> => {

            const {data}: {data: ITransaction | undefined} = await authApi.post<ITransaction | undefined>(`/add`, trans);
            return data;
        });
    }

    async function deleteTransaction(id: string): Promise<ITransaction | undefined> {
        return serviceLayout<ITransaction | undefined>(async (): Promise<ITransaction | undefined> => {

            const {data}: {data: ITransaction | undefined} = await authApi.delete<ITransaction | undefined>(`/del/${id}`);
            return data;
        });
    }


    return  {
        getTransactions,
        createTransaction,
        deleteTransaction
    }
}