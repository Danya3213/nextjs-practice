export interface IButtonService {
    handleLogin: () => Promise<void>,
    handleReg: () => Promise<void>
}