import {Dispatch} from 'react';
import {AppState} from '../reducers';
import {AppActions} from '../Types';
import {GetAllCampuses} from "../Services/Branch";
import {ICampus} from "../Types/Models/Branch";

export const getAllCampuses = (campuses: ICampus[]): AppActions => ({
    type: 'INITIALIZE_CAMPUSES',
    campuses,
});
export const startGetAllCampuses = () => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        try {
            const res = await GetAllCampuses();
            const {campuses} = res.data;
            dispatch(getAllCampuses(campuses));
        } catch (err) {
            console.log(err.response.data);
        }
    };
};
