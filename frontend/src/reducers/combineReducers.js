import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import gradeReducer from './gradeReducer'
import toggleReducer from './toggleReducer'

//Combines reducers and states 
//Made in case there were going to be several reducers handling different states
export default combineReducers({
    courses: (searchReducer), //will contain all the searchReducer states
    grades: (gradeReducer),
    toggle: (toggleReducer)
})