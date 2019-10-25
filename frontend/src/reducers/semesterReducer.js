import initialState from "../store/initialState";
import { SET_CHOSEN_SEMESTER} from "../store/actionTypes";

export default function semesterReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_SEMESTER:
            return {
                ...state, 
                activeSemester: action.payload
            }

       
        default:
            return state
    }
}