import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  headers: { 'Content-Type': 'application/json' },
});

export function signup(payload: { email: string; password: string }) {
  return api.post('/auth/signup', payload);
}

export function login(payload: { email: string; password: string }) {
  return api.post('/auth/login', payload);
}

export default api;
