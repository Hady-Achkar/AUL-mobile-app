import { AxiosResponse } from 'axios';
import axios from 'axios';
import { ApiConstants } from '../../Constants';
import { INews } from '../../Types/Models/News';
/**
 * @description Returns a promise object with RootResponseNews type.
 * @remarks RootMajorResponse:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   news: INews[];
 *   requestTime: Date;
 * }
 * @returns Promise<RootResponseNews>
 *
 */

export const ViewAllNews = (): Promise<AxiosResponse<RootResponseNews>> => {
  return axios({
    url: ApiConstants.GET_ALL_NEWs,
    method: 'GET',
  });
};
export interface RootResponseNews {
  status: 'Sucess' | 'Failure';
  message: string;
  news: INews[];
  requestTime: Date;
}
