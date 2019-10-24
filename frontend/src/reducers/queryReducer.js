import initialState from "../store/initialState";
import { SET_QUERY } from "../store/actionTypes";

export default function queryReducer(state = initialState, action) {
    switch(action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.new
            }
        default:
            return state
    }
}