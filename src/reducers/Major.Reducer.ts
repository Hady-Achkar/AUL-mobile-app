import { IMajor } from '../Types/Models/Major';
import { MajorActions } from '../Types/redux/Major.types';

export interface IMajorInitialState {
  majors: IMajor[];
}
const initState: IMajorInitialState = {
  majors: [],
};
const MajorsReducer = (state = initState, action: MajorActions) => {
  switch (action.type) {
    case 'INITIALIZE_MAJORS':
      return { ...state, majors: action.majors };
    default:
      return state;
  }
};
export default MajorsReducer;
