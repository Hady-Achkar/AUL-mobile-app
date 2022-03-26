import { INews } from '../Models/News';

export const INITIALIZE_NEWS = 'INITIALIZE_NEWS';

export interface initializeNews {
  type: typeof INITIALIZE_NEWS;
  news: INews[];
}

export type NewsActions = initializeNews;
