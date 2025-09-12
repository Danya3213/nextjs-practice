export const validateName = (name: string): RegExpMatchArray | null => {
    if (!name) return null;
    if (name.includes(' ')) return null;
    return name.match(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]{4,20}(?<![_.])$/);
};

export const validateEmail = (email: string): RegExpMatchArray | null => {
    if (!email || email.trim() === '') return null;
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string): boolean => {
    if (!password || password.trim() === '') return false;
    return password.length >= 8 && /\d/.test(password);
};

export const validateConfirmPassword = (confirmPassword: string, password: string): boolean => {
    if (!confirmPassword || confirmPassword.trim() === '') return false;
    if (confirmPassword !== password) return false;
    return confirmPassword.length >= 8 && /\d/.test(confirmPassword);
};