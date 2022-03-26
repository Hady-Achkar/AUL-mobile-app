import { Dispatch } from 'react';
import { AppState } from '../reducers';
import { AppActions } from '../Types';
import { ViewAllEvents } from '../Services/Events';
import { IEvent } from '../Types/Models/Event';

export const initializeEvents = (events: IEvent[]): AppActions => ({
  type: 'INITIALIZE_EVENTS',
  events,
});
export const startInitializeEvents = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    try {
      const res = await ViewAllEvents();
      const { events } = res.data;
      dispatch(initializeEvents(events));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
