/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { API_TIMEOUT, baseURL, StatusCode } from '../../constants';
import { StorageUtils } from '../../utils';

const ApiClient = axios.create({
  baseURL: baseURL,
  timeout: API_TIMEOUT,
});

ApiClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token =
      StorageUtils.localStorage.get('tk') ||
      StorageUtils.sessionStorage.get('tk');

    if (!token) {
      console.log(`Application.token empty!`);
    }
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);
ApiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError<AxiosResponse>) {
    // if (error.response?.status === 401) {
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

const injectToken = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  try {
    const token =
      StorageUtils.localStorage.get('tk') ||
      StorageUtils.sessionStorage.get('tk');

    if (!token) {
      console.log(`Application.token empty!`);
    }
    // @ts-ignore
    config.headers.Authorization = token;
    return config;
  } catch (e: unknown) {
    throw new Error('Error injectToken');
  }
};

const injectErrorResponse = async (error: AxiosError) => {
  try {
    if (error.response && error.response?.status === StatusCode.UnAuthorized) {
      // when token expired or die, localStorage clear
      // redirect to login page
      // window.location.href = '/auth/login';
      StorageUtils.localStorage.deleteAll();
    }
    if (error.message === 'Network Error') {
      //
    }

    return Promise.reject(error);
  } catch (e) {
    throw new Error('Error injectResponse');
  }
};

class Http {
  constructor(private passBaseURL?: string) {}
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance !== null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.passBaseURL || baseURL,
      timeout: API_TIMEOUT,
      headers,
    });

    http.interceptors.request.use(injectToken, (err) => Promise.reject(err));
    http.interceptors.response.use((response) => response, injectErrorResponse);

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosRequestConfig<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export { ApiClient, Http };
