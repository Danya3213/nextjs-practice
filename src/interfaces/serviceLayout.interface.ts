import type {AxiosResponse} from "axios";

export interface IServiceLayout {

    serviceLayout: <T = void>(cb: () => Promise<T>) => Promise<T | undefined>,
    isResOk: (res: AxiosResponse | Response) => boolean,
}