import { TOGGLE_VALUE } from "../store/actionTypes";
import initialState from "../store/initialState"

export default function toggleReducer(state = initialState, action) {
    switch(action.type) {
        
        case TOGGLE_VALUE:
            return {
                ...state,
                value: !action.now
            }
        default:
            return state
        }
    }