import axios, { AxiosResponse } from 'axios';
import { ApiConstants } from '../../Constants';
import { IEvent } from '../../Types/Models/Event';

export interface RootResponseEvents {
  status: 'Success' | 'Failure';
  message: string;
  events: IEvent[];
  requestTime: Date;
}
/**
 * @description Returns a promise object with RootResponseEvents type.
 * @remarks RootResponseEvents:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   events: IEvent[];
 *   requestTime: Date;
 * }
 * @returns Promise<RootResponseEvents>
 *
 */

export const ViewAllEvents = (): Promise<AxiosResponse<RootResponseEvents>> => {
  return axios({
    url: ApiConstants.GET_ALL_EVENTS,
    method: 'GET',
  });
};
