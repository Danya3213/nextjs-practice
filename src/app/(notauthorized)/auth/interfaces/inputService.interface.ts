export interface IInputService {
    isEverythingOk: (haveAccount: boolean) => boolean,
    activateAll: () => void,
    resetAll: () => void,
}