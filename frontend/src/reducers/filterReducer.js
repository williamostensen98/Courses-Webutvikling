import initialState from "../store/initialState";
import { SET_SCLICKED, SET_FCLICKED } from "../store/actionTypes";

export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case SET_FCLICKED:
            return {
                ... state, 
                fclicked: !action.clicked
            }

        case SET_SCLICKED: 
            return {
                ...state,
                sclicked: !action.clicked
            }
        default:
            return state
    }
}