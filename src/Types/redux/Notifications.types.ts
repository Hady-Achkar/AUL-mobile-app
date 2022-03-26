import { INotification } from "../Models/Notification"

export const INITIALIZE_NOTIFICATIONS = "INITIALIZE_NOTIFICATIONS"

export interface initializeNotifications {
  type: typeof INITIALIZE_NOTIFICATIONS
  notifications: INotification[]
}

export type NotificationsActions = initializeNotifications
