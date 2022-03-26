import { AxiosResponse } from 'axios';
import axios from 'axios';
import { ApiConstants } from '../../Constants';
import { IMajor } from '../../Types/Models/Major';
/**
 * @description Returns a promise object with RootMajorsResponse type.
 * @remarks RootMajorResponse:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   majors: IMajor[];
 *   requestTime: Date;
 * }
 * @returns Promise<RootMajorsResponse>
 *
 */

export const ViewAllMajors = (): Promise<AxiosResponse<RootMajorResponse>> => {
  return axios({
    url: ApiConstants.GET_ALL_MAJORS,
    method: 'GET',
  });
};
export interface RootMajorResponse {
  status: 'Success' | 'Failure';
  message: string;
  majors: IMajor[];
  requestTime: Date;
}
