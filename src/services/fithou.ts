import axiosInstance from '@/utils/apis/axiosInstance';
import config from '@/utils/configs';

export const sendNotiForUserOfFithou = async (message: string) => {
  const { data } = await axiosInstance.post(
    `${config.baseApiEndpoint}/crawl-fithou/send-noti`,
    {
      message,
    },
  );
  return data.data;
};

export const getTheNumberOfUsersFithouTool = async () => {
  const { data } = await axiosInstance.get(
    `${config.baseApiEndpoint}/crawl-fithou/fithou-tool/count`,
  );
  return data.data as number;
};
