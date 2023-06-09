import axios from 'axios';
import { BASE_URL } from '../constants';

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: false,
});

export const authInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});
