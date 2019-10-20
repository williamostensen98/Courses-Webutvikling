import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
/* import fetchReducer from './fetchReducer' */


export default combineReducers({
    courses: (searchReducer) //will contain all the searchReducer states
})