import { INotification } from "../Types/Models/Notification"
import { NotificationsActions } from "../Types/redux/Notifications.types"

export interface INotificationsState {
  notifications: INotification[]
}
const initState: INotificationsState = {
  notifications: [],
}
const NotificationsReducer = (
  state = initState,
  action: NotificationsActions
) => {
  switch (action.type) {
    case "INITIALIZE_NOTIFICATIONS":
      return { ...state, notifications: action.notifications }
    default:
      return state
  }
}
export default NotificationsReducer
