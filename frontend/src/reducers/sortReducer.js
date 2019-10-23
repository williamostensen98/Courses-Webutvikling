import initialState from "../store/initialState";
import { SET_CODE_CLICKED, SET_NAME_CLICKED } from "../store/actionTypes";


export default function sortReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CODE_CLICKED:
            return {
                ...state, 
                codeClicked: !action.clicked
            }
        case SET_NAME_CLICKED: 
            return {
                ...state,
                nameClicked: !action.clicked
            }
        default:
            return state
    }
}