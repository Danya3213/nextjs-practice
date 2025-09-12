import type {AxiosResponse} from "axios";

export interface IServiceLayout {

    serviceLayout: (cb: () => Promise<void>) => Promise<void>,
    isResOk: (res: AxiosResponse | Response) => boolean,
}