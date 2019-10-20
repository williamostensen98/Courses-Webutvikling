import {SEARCH_COURSE,
        FETCH_COURSES_BEGIN,
        FETCH_COURSES_SUCCESS,
        FETCH_COURSES_FAILURE} from '../store/actionTypes'
import initialState from '../store/initialState'

/* Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random(). */


/*Different cases:
    SEARCH_COURSE updates the state 'text' as user types in the search bar
    FETCH-action is split into three parts, to make an asynchronous action into three synchronous ones
    */
export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_COURSE:
            return {
                ...state,
                text: action.payload, //setter staten text til action.payload som er input i søkefelt
            }
        case FETCH_COURSES_BEGIN:
                return{
                    ...state,
                    loading: true
            }
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                coursedata: action.data,
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