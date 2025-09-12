export interface ITokenService {
    checkToken: () => Promise<void>;
}