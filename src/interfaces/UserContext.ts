export interface IUserContext {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoading: boolean) => void;
    name: string;
    setName: (isLoading: string) => void;
}