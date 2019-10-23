//Separate module that defines the action types to be used. 

//Action types for handling courses (search and fetch)
export const SEARCH_COURSE = 'SEARCH_COURSE'
export const FETCH_COURSES_BEGIN = 'FETCH_COURSES_BEGIN'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE'

//Action types for handling grades (fetching)
export const FETCH_GRADES_BEGIN = 'FETCH_GRADES_BEGIN'
export const FETCH_GRADES_SUCCESS = 'FETCH_GRADES_SUCCESS'
export const FETCH_GRADES_FAILURE = 'FETCH_GRADES_FAILURE'

//Action types for handling toggling of boolean value used in components
export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
