import React, { createContext, useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

import { history } from '../routes/history';

import api from '../services/api';

import { setToken, getToken, removeToken, setDataStorage, removeDataStorage, getDataStorage } from '../services/auth';
import { API_URL, SIGN_IN,  CHECK_TOKEN } from '../services/endpoints';

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
        const response = await fetch(`${API_URL}${path}`, config);
        const json: CheckTokenProps = await response.json();
        
        if (json.error) return json.error;

        if (json.ok) return true;
      } catch (error) {
        console.error(error);
      }
  }, []);

  const handleSignIn = useCallback(async ({ email, password, rememberMe }) => {
    try {
      setLoading(true);

      const { path, config } = SIGN_IN({ email, password, rememberMe });
      
      const response = await fetch(`${API_URL}${path}`, config);
      const json: SignInProps = await response.json();
      
      if (json.error) throw new Error(json.error);

      if (response.ok) {
        setToken(json.token);
        setDataStorage(json.user);

        setAuthenticated(true);
        setData(json.user);
        
        api.defaults.headers.authorization = `Bearer ${json.token}`;
      }
    } catch (error) {
      setAuthenticated(false);
      setData(null);

      console.error(error);
      toast.error(error.message);
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