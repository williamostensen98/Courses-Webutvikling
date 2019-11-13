import { TOGGLE_FILTER,
         TOGGLE_MODAL } from "../actions/actionTypes";
import initialState from "../store/initialState"

export default function toggleReducer(state = initialState, action) {
    switch(action.type) {
        //Toggles the show/hide  for the Filter-footer
        case TOGGLE_FILTER:
            return {
                ...state,
                filter: !action.now
            }
        //Toggles the show/hide for the modals
        case TOGGLE_MODAL:
            return {
                ...state,
                modal: !action.now
            }
        default:
            return state
        }
    }