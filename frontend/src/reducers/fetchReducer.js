import {FETCH_COURSES_BEGIN,
        FETCH_COURSES_SUCCESS,
        FETCH_COURSES_FAILURE} from '../store/actionTypes'
import initialState from '../store/initialState'

export default function(state = initalState.course, action) {
    switch(action.type) {
        case FETCH_COURSES_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_COURSES_SUCCESS:
            return{
                ...state,
                data: action.data, //TODO HM??? finn ut av dette
                loading: false
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

