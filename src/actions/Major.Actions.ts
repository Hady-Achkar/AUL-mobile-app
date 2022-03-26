import { Dispatch } from 'react';
import { AppState } from '../reducers';
import { AppActions } from '../Types';
import { IMajor } from '../Types/Models/Major';
import { ViewAllMajors } from '../Services/Majors';

export const initializeMajors = (majors: IMajor[]): AppActions => ({
  type: 'INITIALIZE_MAJORS',
  majors,
});
export const startIntializeMajors = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
      const res = await ViewAllMajors();
      const { majors } = res.data;

      dispatch(initializeMajors(majors));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
