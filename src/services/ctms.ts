import axiosInstance from '@/utils/apis/axiosInstance';
import config from '@/utils/configs';

export const sendNotiForUserOfCTMS = async (message: string) => {
  const { data } = await axiosInstance.post(
    `${config.baseApiEndpoint}/ctms/send`,
    {
      message,
    },
  );
  return data.data;
};
