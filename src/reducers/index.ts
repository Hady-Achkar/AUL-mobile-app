import EventsReducer from "./Events.Reducer"
import MajorsReducer from "./Major.Reducer"
import NewsReducer from "./News.Reducer"
import CampusesReducer from "./Campuses.Reducer"
import NotificationsReducer from "./Notifications.Reducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  majors: MajorsReducer,
  events: EventsReducer,
  news: NewsReducer,
  campuses: CampusesReducer,
  notifications: NotificationsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
