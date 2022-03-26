import { Dispatch } from 'react';
import { AppState } from '../reducers';
import { AppActions } from '../Types';
import { ISuggestion } from '../Types/Models/Suggestion';
import { ViewAllSuggestions } from '../Services/Suggestions';
import * as Notifications from 'expo-notifications';
export const initializeSuggestions = (
  suggestions: ISuggestion[]
): AppActions => ({
  type: 'INITIALIZE_SUGGESTIONS',
  suggestions,
});
export const startInitializeSuggestions = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
      const phoneToken = await registerForPushNotificationsAsync();
      if (!phoneToken) {
        return;
      }
      const res = await ViewAllSuggestions();
      const { suggestions } = res.data;
      dispatch(initializeSuggestions(suggestions));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const registerForPushNotificationsAsync = async () => {
  let token;
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
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);

  return token;
};
