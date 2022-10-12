import config from '@/utils/configs';
import {
  SendNotiToUserPayload,
  UserType,
  TrackTimetableResponse,
  SubscribedSubjectResponse,
} from '@/types/users';
import axiosInstance from '@/utils/apis/axiosInstance';

export const getAllUsers = async () => {
  const { data } = await axiosInstance.get(`${config.baseApiEndpoint}/users`);
  return data.data as UserType[];
};

export const sendNotiToUser = async (payload: SendNotiToUserPayload) => {
  const { data } = await axiosInstance.post(
    `${config.baseApiEndpoint}/users/noti`,
    payload,
  );
  return data.data as string;
};

export const getTrackTimetable = async () => {
  const { data } = await axiosInstance.get(
    `${config.baseApiEndpoint}/users/track-timetable`,
  );
  return data.data as TrackTimetableResponse;
};

export const getUserSubscribedSubject = async () => {
  const { data } = await axiosInstance.get(
    `${config.baseApiEndpoint}/users/subscribed-subject`,
  );
  return data.data as SubscribedSubjectResponse;
};
