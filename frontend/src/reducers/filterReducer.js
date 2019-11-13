import initialState from "../store/initialState";
import { SET_SCLICKED, 
         SET_FCLICKED } from "../actions/actionTypes";


export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        //Toggles the value of fclicked from true -> false, or false -> true
        case SET_FCLICKED:
            return {
                ...state, 
                fclicked: !action.clicked
            }
        //Toggles the value of sclicked from true -> false, or false -> true
        case SET_SCLICKED: 
            return {
                ...state,
                sclicked: !action.clicked
            }
        default:
            return state
    }
}