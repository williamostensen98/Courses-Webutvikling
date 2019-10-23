//Actions creators for search and course fetching

import { SEARCH_COURSE, 
         FETCH_COURSES_BEGIN, 
         FETCH_COURSES_SUCCESS, 
         FETCH_COURSES_FAILURE} from './actionTypes'
import axios from 'axios'


//'payload' is set to the text given as a parameter
export const searchCourse = text => dispatch => {
    dispatch ({
        type: SEARCH_COURSE,
        payload: text
    })
}


//The three following action creators are constructed to split an asynchronous action into three synchronous ones.

//When user presses 'Search'
export const fetchCoursesBegin = () => dispatch => {
    dispatch ({
        type: FETCH_COURSES_BEGIN
    })
}

//If the courses are fetched successfully from database
//'data' is set to the response given as a parameter
export const fetchCoursesSuccess = (response) => dispatch => {
    dispatch ({
        type: FETCH_COURSES_SUCCESS,
        data: response
    })
    /* console.log("SUCCESS:",response) */
}

//If the courses are NOT fetched successfully from database
//'error' is set to the error given as a parameter
export const fetchCoursesFailure = (error) => dispatch =>{
    dispatch ({
        type: FETCH_COURSES_FAILURE,
        error: error
    })
}



//The actual fetching through url from the virtual machine
export const fetchCourses = (oldQuery, newQuery) => {
    return (dispatch) => {
        dispatch(fetchCoursesBegin())
        console.log("QUERY:",oldQuery+newQuery)
        axios.get("http://it2810-39.idi.ntnu.no:3001/courses?"+oldQuery+newQuery)
        .then(response => {
            dispatch(fetchCoursesSuccess(response.data)) 
        })
        .catch(error => {
            dispatch(fetchCoursesFailure(error))
        })
    }
}
