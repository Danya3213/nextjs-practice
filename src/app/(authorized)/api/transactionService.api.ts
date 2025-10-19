import axios, {type AxiosInstance, type AxiosResponse} from "axios";
import {useServiceLayout} from "@api/serviceLayout.api";
import {useNotification} from "@hooks/useNotification";
import {ENotificationType} from "@/enums/notificationsType.enum";
import type {ITransaction} from "@authPages/interfaces/transaction.interface";
import type {ITransactionService} from "@authPages/interfaces/transactionService.interface";
import type {INotificationContext} from "@/interfaces/notificationContext.interface";
import {io, Socket} from "socket.io-client";
import {devConsole} from "@devConsole";
import type {ITransactionContext} from "@authPages/interfaces/transactionContext.interface";
import {useTransaction} from "@authPages/hooks/useTransaction";
import {usePathname} from "next/navigation";

export const useTransactionService = (): ITransactionService => {

    const {serviceLayout} = useServiceLayout();
    const {createNotification}:INotificationContext = useNotification();
    const {setTransactions}: ITransactionContext = useTransaction();

    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEST_URL}/trans`,
        withCredentials: true,
    })

    const pathname = usePathname();

    function connectSocketIo(): Socket | undefined {

        if (pathname !== "/auth") {

            const socket = io('http://localhost:4200/api/trans', {
                withCredentials: true,
                transports: ['websocket'],
            });

            socket.on('connect', () => {devConsole.log("Success connecting socket io")});

            socket.on("transactions", (transactions: ITransaction[]) => {

                setTransactions(transactions);
            });

            return socket;
        }

        return undefined;
    }

    function disconnectSocketIo(socket: Socket | undefined): void {

        if (!socket) return;

        socket.disconnect();
    }

    async function getTransactions(): Promise<ITransaction[] | undefined> {
        return serviceLayout<ITransaction[]>(async (): Promise<ITransaction[]> => {

            const { data }: {data: ITransaction[] | undefined} = await authApi.get<ITransaction[]>("/all");
            return data;
        });
    }

    async function createTransaction(trans: Omit<ITransaction, "_id">, cb: () => void = (): void => {}): Promise<ITransaction | undefined> {
        return serviceLayout<ITransaction | undefined>(async (): Promise<ITransaction | undefined> => {

            try {
                const {data}: {data: ITransaction | undefined} = await authApi.post<ITransaction | undefined>(`/add`, trans);

                createNotification(ENotificationType.success, "Transaction was successfully created");
                cb();
                return data;

            }  catch (err)  {

                createNotification(ENotificationType.error, "Error creating transaction");
            }
        });
    }

    async function deleteTransaction(id: string): Promise<ITransaction | undefined> {
        return serviceLayout<ITransaction | undefined>(async (): Promise<ITransaction | undefined> => {

            try {

                const {data}: AxiosResponse<ITransaction | undefined> = await authApi.delete<ITransaction | undefined>(`/del/${id}`);
                createNotification(ENotificationType.success, "Transaction was successfully deleted");
                return data;
            }  catch (err)  {

                createNotification(ENotificationType.error, "Error deleting transaction");
            }
        });
    }

    async function updateTransaction(id: string, body: Partial<ITransaction>, cb: () => void = (): void => {}): Promise<ITransaction | undefined> {

        return serviceLayout<ITransaction | undefined>(async (): Promise<ITransaction | undefined> => {

            try {
                const {data}: AxiosResponse<ITransaction | undefined> = await authApi.patch<ITransaction | undefined>(`/change/${id}`, body);
                createNotification(ENotificationType.success, "Transaction was successfully updated");
                cb();
                return data;
            } catch (err) {

                createNotification(ENotificationType.error, "Error updating transaction");
            }
        })
    }

    return  {
        connectSocketIo,
        disconnectSocketIo,
        getTransactions,
        createTransaction,
        deleteTransaction,
        updateTransaction
    }
}