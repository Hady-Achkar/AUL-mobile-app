export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  campus: string;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
}
