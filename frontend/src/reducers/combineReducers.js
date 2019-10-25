import { combineReducers } from 'redux'
import courseReducer from './courseReducer'
import gradeReducer from './gradeReducer'
import toggleReducer from './toggleReducer'
import filterReducer from './filterReducer'
import sortReducer from './sortReducer'
import queryReducer from './queryReducer'

//Combines reducers and states 
//Made in case there were going to be several reducers handling different states
export default combineReducers({
    courses: (courseReducer), //will access and update all the searchReducer states
    grades:  (gradeReducer),   //will access and update all the gradeReducer states
    toggle:  (toggleReducer),  //will access and update all the toggleReducer states
    filter:  (filterReducer),
    sort:    (sortReducer),
    query:   (queryReducer)
})