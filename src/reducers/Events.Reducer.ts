import { IEvent } from '../Types/Models/Event';
import { EventsActions } from '../Types/redux/Events.types';

export interface IEventsInitialState {
  events: IEvent[];
}
const initState: IEventsInitialState = {
  events: [],
};
const EventsReducer = (state = initState, action: EventsActions) => {
  switch (action.type) {
    case 'INITIALIZE_EVENTS':
      return { ...state, events: action.events };
    default:
      return state;
  }
};
export default EventsReducer;
