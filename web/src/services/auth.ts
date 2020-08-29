export const TOKEN_KEY: string = "@proffy_TOKEN";

export const isAuthenticated = (): boolean => window.localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = (): string | null => window.localStorage.getItem(TOKEN_KEY);

export const login = (token: string): void => window.localStorage.setItem(TOKEN_KEY, token);

export const logout = (): void => window.localStorage.removeItem(TOKEN_KEY);