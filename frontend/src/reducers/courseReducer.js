/* Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random(). */

import {SEARCH_COURSE,
        FETCH_COURSES_BEGIN,
        FETCH_COURSES_SUCCESS,
        FETCH_COURSES_FAILURE,
        LOAD_MORE_COURSES,
        RESET_LIMIT} from '../actions/actionTypes'
import initialState from '../store/initialState'


/*Different cases:
    SEARCH_COURSE updates the state 'text' as user types in the search bar
    FETCH-action is split into three parts, to make an asynchronous action into three synchronous ones
*/
export default function courseReducer(state = initialState, action) {
    switch(action.type) {
        //Sets state 'text' to payload defined in action.js
        case SEARCH_COURSE:
            return {
                ...state,
                text: action.payload 
            }
        //Sets state 'loading', triggers loading-spinner
        case FETCH_COURSES_BEGIN:
            return{
                ...state,
                loading: true 
            }
        //Sets state 'coursedata' to the data fetched from database
        //Sets state 'loading' to false, since the data is fetched
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                coursedata: action.data,
                loading: false,
            }
        //Sets state 'error' to the error caught
        //'Loading' to false, since the query failed
        case FETCH_COURSES_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case LOAD_MORE_COURSES:
            return {
                ...state,
                loading: true,
                limit: state.limit+10
            }
        case RESET_LIMIT:
            return {
                ...state,
                limit: 10
            }
        default:
            return state
    }
}