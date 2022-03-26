import { AxiosResponse } from 'axios';
import axios from 'axios';
import { ApiConstants } from '../../Constants';
import { ISuggestion } from '../../Types/Models/Suggestion';
import * as Notifications from 'expo-notifications';

/**
 * @description Returns a promise object with RootSuggestionsResponse type.
 * @remarks RootSuggestionsResponse:{
 *  status: 'Success' | 'Failure';
 *  message: string;
 *  suggestions: ISuggestion[];
 *  requestTime: Date;
 * }
 * @returns Promise<RootSuggestionsResponse>
 *
 */
const registerForPushNotificationsAsync = async () => {
  // if (Constants.isDevice) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
  // } else {
  // 	alert('Must use physical device for Push Notifications');
  // }
};
export const ViewAllSuggestions = async (): Promise<
  AxiosResponse<RootSuggestionsResponse>
> => {
  return registerForPushNotificationsAsync().then((token) => {
    return axios({
      url: ApiConstants.GET_SUGGESTIONS,
      method: 'POST',
      data: {
        phoneToken: token,
      },
    });
  });
};
export const AddVote = async (
  suggestionId: string
): Promise<AxiosResponse<RootInsertSuggestion>> => {
  return registerForPushNotificationsAsync().then((token) => {
    return axios({
      url: ApiConstants.INSERT_VOTE,
      method: 'POST',
      data: {
        phoneToken: token,
        suggestionId,
      },
    });
  });
};
export interface RootSuggestionsResponse {
  status: 'Success' | 'Failure';
  message: string;
  suggestions: ISuggestion[];
  requestTime: Date;
}
export interface RootInsertSuggestion {
  status: 'Success' | 'Failure';
  message: string;
  suggestion: ISuggestion[];
  isVoted: boolean;
  requestTime: Date;
}
