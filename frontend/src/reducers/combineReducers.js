import { combineReducers } from 'redux'
import courseReducer from './courseReducer'
import gradeReducer from './gradeReducer'
import toggleReducer from './toggleReducer'
import filterReducer from './filterReducer'
import semesterReducer from './semesterReducer'
import sortReducer from './sortReducer'
import queryReducer from './queryReducer'

//Combines reducers, so that all of the states and actions are available
export default combineReducers({
    courses: (courseReducer),  
    grades:  (gradeReducer),  
    toggle:  (toggleReducer), 
    filter:  (filterReducer),
    sort:    (sortReducer),
    semester: (semesterReducer),
    query:   (queryReducer)
   
})