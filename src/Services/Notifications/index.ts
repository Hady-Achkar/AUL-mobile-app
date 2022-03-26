import { AxiosResponse } from 'axios';
import axios from 'axios';
import { ApiConstants } from '../../Constants';
import { INotification } from '../../Types/Models/Notification';
/**
 * @description Returns a promise object with RootResponseNews type.
 * @remarks RootGetAllNotifications:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   notifications: INotification[];
 *   requestTime: Date;
 * }
 * @returns Promise<RootGetAllNotifications>
 *
 */

export const ViewAllNotifications = (): Promise<AxiosResponse<RootGetAllNotifications>> => {
    return axios({
        url: ApiConstants.GET_NOTIFICATIONS,
        method: 'get',
    });
};
export interface RootGetAllNotifications {
    status: 'Success'|'Failure';
    message: string;
    notifications: INotification[];
    requestTime: Date;
}
