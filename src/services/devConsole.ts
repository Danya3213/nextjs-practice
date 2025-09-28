class consoleClass {
    private readonly checkIsDevMode = ():boolean => {
        return process.env.NEXT_PUBLIC_MODE === 'DEV';
    }

    readonly log = (message: unknown): void => {
        if (this.checkIsDevMode()) {
            console.log(message);
        }
    }

    readonly error = (message: unknown): void => {
        if (this.checkIsDevMode()) {
            console.error(message);
        }
    }

    readonly warn = (message: unknown): void => {
        if (this.checkIsDevMode()) {
            console.warn(message);
        }
    }

    readonly clear = (): void => {
        if (this.checkIsDevMode()) {
            console.clear();
        }
    }
}

export const devConsole = new consoleClass();