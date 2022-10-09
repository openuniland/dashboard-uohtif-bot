import axios from 'axios';
import config from '@/utils/configs';
import { UserType } from '@/types/users';

export const getAllUsers = async () => {
  const { data } = await axios.get(`${config.baseApiEndpoint}/users`);
  return data.data as UserType[];
};
