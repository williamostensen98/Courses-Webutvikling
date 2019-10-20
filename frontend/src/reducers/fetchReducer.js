import {FETCH_COURSES_BEGIN,
        FETCH_COURSES_SUCCESS,
        FETCH_COURSES_FAILURE} from '../store/actionTypes'
import initalState from '../store/initialState'

export default function(state = initalState, action) {
    console.log("ACTION TRIGGERED:", action.type);
    switch(action.type) {
        case FETCH_COURSES_BEGIN:
            return{
                ...state,
                loading: true
            }
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
            
        case FETCH_COURSES_FAILURE:
            return{
                ...state,
                loading: false
            }
        default:
            return state
    }
}

