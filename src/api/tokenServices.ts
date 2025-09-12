import {useUserInfo} from "@hooks/useUserInfo.hook";
import axios, {type AxiosInstance} from "axios";
import {useServiceLayout} from "./serviceLayout";

export function useTokenService () {

    const {setIsLoggedIn, setName} = useUserInfo();
    const authAPI = `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`;
    const {isResOk} = useServiceLayout();
    const authApi: AxiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_NEXT_URL}/auth`,
    })

    const checkToken = async () => {
        try {
            const res = await authApi.get(`${authAPI}/check`);

            if (isResOk(res)) {
                setIsLoggedIn(true);
                // goToPage("");
                setName(res.data);
                return true;
            } else {
                // goToPage("/auth");
                setIsLoggedIn(false);
                return false;
            }
        } catch (error) {
            setIsLoggedIn(false);
            // goToPage("/auth");
            return false;
        }
    };


    return {
        checkToken,
    }
}