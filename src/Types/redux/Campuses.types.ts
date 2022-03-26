
import {ICampus} from "../Models/Branch";

export const INITIALIZE_CAMPUSES = 'INITIALIZE_CAMPUSES';

export interface initializeCampuses {
    type: typeof INITIALIZE_CAMPUSES;
    campuses: ICampus[];
}

export type CampusActions = initializeCampuses;
