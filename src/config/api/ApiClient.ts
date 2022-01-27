import axios, { AxiosRequestConfig } from 'axios';
import { API_TIMEOUT, baseURL } from 'src/constants';

const ApiClient = axios.create({
  baseURL: baseURL,
  timeout: API_TIMEOUT,
});

ApiClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = null;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
