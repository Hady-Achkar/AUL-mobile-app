import { IMajor } from '../Models/Major';

export const INITIALIZE_MAJORS = 'INITIALIZE_MAJORS';

export interface initializeMajors {
  type: typeof INITIALIZE_MAJORS;
  majors: IMajor[];
}

export type MajorActions = initializeMajors;
