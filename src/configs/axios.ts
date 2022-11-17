import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';

import constants from './constants';

const client = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: constants.API_URL,
});

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);

export default client;
