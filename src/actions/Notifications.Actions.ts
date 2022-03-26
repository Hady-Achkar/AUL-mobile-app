import { Dispatch } from 'react';
import { AppState } from '../reducers';
import { AppActions } from '../Types';
import { INotification } from '../Types/Models/Notification';
import { ViewAllNotifications } from '../Services/Notifications/index';

export const initializeNotifications = (
  notifications: INotification[]
): AppActions => ({
  type: 'INITIALIZE_NOTIFICATIONS',
  notifications,
});
export const startInitializeNotifications = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
      const res = await ViewAllNotifications();
      const { notifications } = res.data;

      dispatch(initializeNotifications(notifications));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
