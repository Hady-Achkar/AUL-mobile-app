export interface INotification {
  _id: string
  notificationType: "News" | "Events"
  title: string
  createdAt?: Date
}
