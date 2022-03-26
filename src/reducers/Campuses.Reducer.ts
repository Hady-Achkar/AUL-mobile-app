import {ICampus} from "../Types/Models/Branch";
import {CampusActions} from "../Types/redux/Campuses.types";

export interface IEventsInitialState {
    campuses: ICampus[];
}

const initState: IEventsInitialState = {
    campuses: [],
};
const BranchReducer = (state = initState, action: CampusActions) => {
    switch (action.type) {
        case 'INITIALIZE_CAMPUSES':
            return {...state, campuses: action.campuses};
        default:
            return state;
    }
};
export default BranchReducer;
