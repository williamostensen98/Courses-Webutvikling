import { SEARCH_COURSE, 
         FETCH_COURSES_BEGIN, 
         FETCH_COURSES_SUCCESS, 
         FETCH_COURSES_FAILURE} from './actionTypes'
import axios from 'axios'
import initialState from './initialState'




export const searchCourse = text => dispatch => {
    dispatch ({
        type: SEARCH_COURSE,
        payload: text
    })
}

export const fetchCoursesBegin = () => {
    return {
        type: FETCH_COURSES_BEGIN
    }
}

export const fetchCoursesSuccess = (data) => {
    return {
        type: FETCH_COURSES_SUCCESS,
        data: data
    }
}

export const fetchCoursesFailure = (error) => {
    return {
        type: FETCH_COURSES_FAILURE,
        error: error
    }
}


export const fetchCourses = text => {
    return (dispatch) => {
        dispatch(fetchCoursesBegin())
        console.log(initialState.courses.loading) //false med en gang fordi det settes i initState
        axios.get('https://localhost:3100/'+text)//TODO Riktig request
        .then(response => {
            dispatch(fetchCoursesSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchCoursesFailure(error))
        })
    }
}