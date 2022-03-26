import { INews } from '../Types/Models/News';
import { NewsActions } from '../Types/redux/News.types';

export interface INewsInitialState {
  news: INews[];
}
const initState: INewsInitialState = {
  news: [],
};
const FacultiesReducer = (state = initState, action: NewsActions) => {
  switch (action.type) {
    case 'INITIALIZE_NEWS':
      return { ...state, news: action.news };
    default:
      return state;
  }
};
export default FacultiesReducer;
