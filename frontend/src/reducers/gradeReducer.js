import { FETCH_GRADES_BEGIN, 
        FETCH_GRADES_SUCCESS, 
        FETCH_GRADES_FAILURE} from '../actions/actionTypes'
import initialState from '../store/initialState'


export default function gradeReducer(state = initialState, action) {
    switch(action.type) {
        //Same logic and principle as in courseReducer.js
        case FETCH_GRADES_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_GRADES_SUCCESS:
            return {
                ...state,
                gradedata: action.data,
                loading: false
            }
        case FETCH_GRADES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }
}