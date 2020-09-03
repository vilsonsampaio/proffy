import { UserProps } from './endpoints.d';

export const TOKEN_KEY: string = '@proffy_TOKEN';
export const DATA_KEY: string = '@proffy_DATA';


export const getToken = (): string | null => JSON.parse(window.localStorage.getItem(TOKEN_KEY) as string);
export const getDataStorage = (): UserProps | null => JSON.parse(window.localStorage.getItem(DATA_KEY) as string);


export const setToken = (token: string): void => window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
export const setDataStorage = (data: UserProps): void => window.localStorage.setItem(DATA_KEY, JSON.stringify(data));


export const removeToken = (): void => window.localStorage.removeItem(TOKEN_KEY);
export const removeDataStorage = (): void => window.localStorage.removeItem(DATA_KEY);

