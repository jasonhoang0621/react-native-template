import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken, removeToken} from 'src/utils/token';
import {API_URL} from 'src/config/constant';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await getToken();
    if (!config.headers) {
      return config;
    }
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  async (error: any) => {
    return await Promise.reject(error);
  },
);
axiosClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      await removeToken();
    }
    return error.response.data;
  },
);

export {axiosClient};
