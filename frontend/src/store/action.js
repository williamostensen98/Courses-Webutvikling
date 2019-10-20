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

export const fetchCoursesBegin = () => dispatch => {
    dispatch ({
        type: FETCH_COURSES_BEGIN
    })
}

export const fetchCoursesSuccess = (response) => dispatch => {
    dispatch ({
        type: FETCH_COURSES_SUCCESS,
        data: response
    })
    /* console.log("SUCCESS:",response) */
}

export const fetchCoursesFailure = (error) => dispatch =>{
    dispatch ({
        type: FETCH_COURSES_FAILURE,
        error: error
    })
}


export const fetchCourses = text => {
    return (dispatch) => {
        dispatch(fetchCoursesBegin())
        axios.get('http://it2810-39.idi.ntnu.no:3001/'+text)
        .then(response => {
            dispatch(fetchCoursesSuccess(response.data))
            console.log("RESPONSE:",response.data)
        })
        .catch(error => {
            dispatch(fetchCoursesFailure(error))
        })
    }
}