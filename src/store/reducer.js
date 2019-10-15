import {SEARCH_MOVIE} from './actionTypes'


/* Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random(). */

const initialState = {
    //TODO Add initialState
    text: '',
}


const searchReducer = (state= initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        default:
            return state
    }
}


//classic, no use
const reducer = (state = initialState, action) => {
    const newState = {...state}  
    //TODO Fill out reducer
    //if(action === blablabla)

    return newState
}


export default reducer