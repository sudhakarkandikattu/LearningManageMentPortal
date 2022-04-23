import Axios from 'axios';
import host from './host';

const { REACT_APP_BASE_URL } = host();

export const axiosInstance = Axios.create({
  baseURL: 'http://localhost:30001',
  method: 'post',
  timeout: 1000 * 1000, // timeouts, if API is not resolved in 10 seconds
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    Accept: 'application/json',
  },
});

export const axiosGetInstance = Axios.create({
  baseURL: 'http://localhost:30001',
  method: 'get',
  credentials: 'include',
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
});
