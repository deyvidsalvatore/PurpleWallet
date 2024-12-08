import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/auth',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (name: string, email: string, password: string) => {
  const response = await apiClient.post('/signup', { name, email, password });
  return response.data;
};

export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post('/signin', { email, password });
  if (response.data?.token) {
    Cookies.set('token', response.data.token, { expires: 1 / 24 }); 
  }
  return response.data;
};

export const signOut = () => {
  Cookies.remove('token');
};

export const isAuthenticated = () => {
  return !!Cookies.get('token');
};