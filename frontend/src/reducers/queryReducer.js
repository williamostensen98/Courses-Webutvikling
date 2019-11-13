import initialState from "../store/initialState";
import { SET_QUERY } from "../actions/actionTypes";

export default function queryReducer(state = initialState, action) {
    switch(action.type) {
        //Updates state 'query' to the most recent query
        case SET_QUERY:
            return {
                ...state,
                query: action.new
            }
        default:
            return state
    }
}