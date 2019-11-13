import initialState from "../store/initialState";
import { SET_CODE_CLICKED, SET_NAME_CLICKED, SET_ORDER } from "../actions/actionTypes";


export default function sortReducer(state = initialState, action) {
    switch(action.type) {
         //Toggles the value of codeClicked from true -> false, or false -> true
        case SET_CODE_CLICKED:
            return {
                ...state, 
                codeClicked: !action.clicked
            }
        //Toggles the value of nameClicked from true -> false, or false -> true
        case SET_NAME_CLICKED: 
            return {
                ...state,
                nameClicked: !action.clicked
            }
         //Toggles the value of order from 1 -> (-1), or (-1) -> 1
        case SET_ORDER: 
            return {
                ...state,
                orderBy: !action.clicked
            }
        default:
            return state
    }
}