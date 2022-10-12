export interface UserType {
  id: string;
  username: string;
  subscribedID: string;
  isSubscribedSubject: boolean;
  isTrackTimetable: boolean;
}

export interface SendNotiToUserPayload {
  id: string;
  message: string;
}

export interface TrackTimetableResponse {
  trackTimetable: number;
  noTrackTimetable: number;
}

export interface SubscribedSubjectResponse {
  subscribedSubject: number;
  noSubscribedSubject: number;
}
