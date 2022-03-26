import { ICourse } from './Course';
import { IRequirnment } from './Requirnment';

export interface MajorCours {
  _id: string;
  course: ICourse;
}

export interface IMajor {
  _id?: string;
  electiveCourses: IRequirnment[];
  englishReq: IRequirnment[];
  freeElective: IRequirnment[];
  generalReq: IRequirnment[];
  majorCourses: MajorCours[];
  needCredits: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
