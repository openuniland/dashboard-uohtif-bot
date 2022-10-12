import axios from 'axios';

import configs from '@/utils/configs';
import { getAuthkey, removeItemFromStorage } from '@/utils/storage';

const authkey = getAuthkey();

const axiosInstance = axios.create({
  baseURL: configs.baseApiEndpoint,
  headers: {
    authkey: JSON.parse(authkey || '""'),
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
