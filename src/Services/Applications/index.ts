import axios, { AxiosResponse } from 'axios';
import { ApiConstants } from '../../Constants';
import { IApplication } from '../../Types/Models/Application';

/**
 * @description Returns a promise object with RootAddApplication type.
 * @remarks RootGetALLBranches:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   application: IApplication;
 *   requestTime: Date;
 * }
 * @returns Promise<RootAddApplication>
 *
 */

export const AddApplication = (
  payload: IApplication
): Promise<AxiosResponse<RootAddApplication>> => {
  return axios({
    url: ApiConstants.ADD_APPLICATION,
    method: 'POST',
    data: payload,
  });
};

export interface RootAddApplication {
  status: 'Success' | 'Failure';
  message: string;
  application: IApplication;
  requestTime: Date;
}
