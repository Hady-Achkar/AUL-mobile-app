import { IEvent } from '../Models/Event';

export const INITIALIZE_EVENTS = 'INITIALIZE_EVENTS';

export interface initializeEvents {
  type: typeof INITIALIZE_EVENTS;
  events: IEvent[];
}

export type EventsActions = initializeEvents;
