import { SEARCH_COURSE, 
         FETCH_COURSES_BEGIN, 
         FETCH_COURSES_SUCCESS, 
         FETCH_COURSES_FAILURE} from './actionTypes'
import axios from 'axios'




export const searchCourse = text => dispatch => {
    dispatch ({
        type: SEARCH_COURSE,
        payload: text
    })
}

export const fetchCoursesBegin = dispatch => {
    dispatch({
        type: FETCH_COURSES_BEGIN
    })
}

export const fetchCoursesSuccess = data => dispatch => {
    dispatch({
        type: FETCH_COURSES_SUCCESS,
        data: data
    })
}

export const fetchCoursesFailure = error => dispatch => {
    dispatch({
        type: FETCH_COURSES_FAILURE,
        error: error
    })
}


export const fetchCourses = () => {
    return (dispatch) => {
        dispatch(fetchCoursesBegin())
        axios.get('https://localhost:3100/courses')//TODO Riktig request
        .then(response => {
            dispatch(fetchCoursesSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchCoursesFailure(error))
        })
    }
}