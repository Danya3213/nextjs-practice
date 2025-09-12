import {useInputService} from "@notAuthPages/auth/services/inputService";
import {useAuthService} from "@/api/authServices";
import type {IButtonService} from "@notAuthPages/auth/interfaces/buttonService.interface";
import type {IInputService} from "@notAuthPages/auth/interfaces/inputService.interface";
import type {IAuthService} from "@notAuthPages/auth/interfaces/AuthService.interface";

export function useButtonService():IButtonService {

    const {isEverythingOk, activateAll}: IInputService = useInputService();
    const {login, registration}: IAuthService = useAuthService();

    async function authLayout(haveAccount: boolean, callBack: () => Promise<void>): Promise<void> {

        if (isEverythingOk(haveAccount)) {

            await callBack();
        } else {

            activateAll();
        }
    }

    async function handleLogin(): Promise<void> {

        await authLayout(true, async () => {
            await login(() => {
                console.log('login')
            })
        });
    }

    async function handleReg(): Promise<void> {

        await authLayout(false, async () => {
            await registration(() => {
                console.log('registration')
            });
        });
    }

    return {
        handleLogin,
        handleReg,
    }
}


