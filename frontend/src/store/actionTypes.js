//Separate module that defines the action types to be used. 
export const SET_QUERY = 'SET_QUERY'

//Action types for handling courses (search and fetch)
export const SEARCH_COURSE = 'SEARCH_COURSE'
export const FETCH_COURSES_BEGIN = 'FETCH_COURSES_BEGIN'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE'
export const LOAD_MORE_COURSES = 'LOAD_MORE_COURSES'

//Action types for handling grades (fetching)
export const FETCH_GRADES_BEGIN = 'FETCH_GRADES_BEGIN'
export const FETCH_GRADES_SUCCESS = 'FETCH_GRADES_SUCCESS'
export const FETCH_GRADES_FAILURE = 'FETCH_GRADES_FAILURE'

//Action types for handling toggling of boolean value used in components
export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

//Action types for which semester is chosen as filter
export const SET_FCLICKED = 'SET_FCLICKED'
export const SET_SCLICKED = 'SET_SCLICKED'


//Action types for what is chosen to be sorted by
export const SET_CODE_CLICKED = 'SET_CODE_CLICKED'
export const SET_NAME_CLICKED = 'SET_NAME_CLICKED'
