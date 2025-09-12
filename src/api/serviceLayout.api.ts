import {useResponse} from "@hooks/useResponse.hook";
import type {IResponseContext} from "@/interfaces/ResponseContext.interface";
import type {AxiosResponse} from "axios";
import type {IServiceLayout} from "@/interfaces/serviceLayout.interface";

export function useServiceLayout (): IServiceLayout {

    const {setIsLoading}:IResponseContext = useResponse();

    const serviceLayout = async (tryCallback: () => Promise<void>) => {

        setIsLoading(true);

        try {

            await tryCallback();
        } catch (err) {

        } finally {

            setIsLoading(false);
        }
    }

    const isResOk = (res: Response | AxiosResponse) => {

        return res.status >= 200 && res.status < 300;
    }

    return {serviceLayout, isResOk};
}