import {ICampus} from "../../Types/Models/Branch";
import axios, {AxiosResponse} from 'axios';
import {ApiConstants} from '../../Constants';

export interface RootGetALLBranches {
    status: 'Success' | 'Failure';
    message: string;
    campuses: ICampus[];
    requestTime: Date;
}

/**
 * @description Returns a promise object with RootGetALLBranches type.
 * @remarks RootGetALLBranches:{
 *   status: 'Success' | 'Failure';
 *   message: string;
 *   campuses: ICampus[];
 *   requestTime: Date;
 * }
 * @returns Promise<RootGetALLBranches>
 *
 */

export const GetAllCampuses = (): Promise<AxiosResponse<RootGetALLBranches>> => {
    return axios({
        url: ApiConstants.GET_ALL_CAMPUSES,
        method: 'GET',
    });
};
