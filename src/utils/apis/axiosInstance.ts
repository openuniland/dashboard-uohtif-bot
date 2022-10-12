import axios from 'axios';

import config from '@/utils/configs';
import { getAuthkey, removeItemFromStorage } from '@/utils/storage';

const authKey = getAuthkey();

const axiosInstance = axios.create({
  baseURL: config.baseApiEndpoint,
  headers: {
    authKey: JSON.parse(authKey || '""'),
  },
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async function (response: any) {
    return response;
  },
  async function (error: any) {
    // removeItemFromStorage('authkey');
    // window.location.replace('/');
    console.log(error);

    return Promise.reject(error?.response?.data);
  },
);

export default axiosInstance;
