export interface IAuthService {
    login(cb?: () => void): Promise<void>;
    registration(cb?: () => void): Promise<void>;
    logout(cb?: () => void): Promise<void>;
}