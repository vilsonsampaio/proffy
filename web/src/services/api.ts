import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// Interceptando o request do axios, que, antes de acontecer, verifica se existe o token no localStorage, e, existindo, adiciona no Header de Authorization.
api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;
  
  return config;
});

export default api;