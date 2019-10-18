import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

export default combineReducers({
    courses: searchReducer //will contain all the searchReducer states
})