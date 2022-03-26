import { Dispatch } from 'react';
import { AppState } from '../reducers';
import { AppActions } from '../Types';
import { ViewAllMajors } from '../Services/Majors';
import { INews } from '../Types/Models/News';
import { ViewAllNews } from '../Services/News';

export const initializeNews = (news: INews[]): AppActions => ({
  type: 'INITIALIZE_NEWS',
  news,
});
export const startInitializeNews = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
      const res = await ViewAllNews();
      const { news } = res.data;
      dispatch(initializeNews(news));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
