import React, { createContext, useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

import { history } from '../routes/history';

import api from '../services/api';

import { setToken, getToken, removeToken, setDataStorage, removeDataStorage, getDataStorage } from '../services/auth';
import { SIGN_IN,  CHECK_TOKEN } from '../services/endpoints';

import { SignInProps, SignInBodyProps, CheckTokenProps, UserProps } from '../services/endpoints.d'

export interface AuthContextProps {
  authenticated: boolean;
  handleSignIn(credentials: SignInBodyProps): Promise<void>;
  handleSignOut(): Promise<void>;
  loading: boolean;
  data: UserProps | null; 
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [data, setData] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = useCallback(async () => {
    setLoading(false);
    setAuthenticated(false);
    setData(null);  

    api.defaults.headers.authorization = undefined;
    
    removeToken();
    removeDataStorage();

    history.push('/sessions/sign-in');
  }, []);

  const checkToken = useCallback(async (token: string) => {
      const { path, config } = CHECK_TOKEN(token);

      try {
        const { data } = await api.get<CheckTokenProps>(path, config);

        if (data.ok) return true;
        
        if(data.error) return data.error;
      } catch (error) {
        console.error(error);

        if (error.response) {
          return error.response.data.error;
        } 
      }
  }, []);

  const handleSignIn = useCallback(async ({ email, password, rememberMe }) => {
    try {
      setLoading(true);

      const { path, body } = SIGN_IN({ email, password, rememberMe });
      
      const { data } = await api.post<SignInProps>(path, body);
      
      setToken(data.token);
      setDataStorage(data.user);

      setAuthenticated(true);
      setData(data.user);
      
      api.defaults.headers.authorization = `Bearer ${data.token}`;
    } catch (error) {
      setAuthenticated(false);
      setData(null);

      console.error(error);

      if (error.response) {
        toast.error(error.response.data.error);
      } 
    } finally {
      setLoading(false);
    }
  }, []);

  

  useEffect(() => {
    async function autoSignIn() {
      const token = getToken();
      const data = getDataStorage();

      if (token && data) {
        try {
          setLoading(true);

          const isValid = await checkToken(token);
          
          if (typeof isValid === 'string') throw Error(isValid);

          setAuthenticated(true);
          setData(data);

          api.defaults.headers.authorization = `Bearer ${token}`;
        } catch (error) {
          await handleSignOut();

          console.error(error);
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      }
    }

    autoSignIn();
  }, [handleSignOut, checkToken]);

  return (
    <AuthContext.Provider value={{ authenticated, handleSignIn, handleSignOut, data, loading }}>
      {children}   
    </AuthContext.Provider>
  );
}