import { SEARCH_COURSE, 
         FETCH_COURSES_BEGIN, 
         FETCH_COURSES_SUCCESS, 
         FETCH_COURSES_FAILURE,
         ADD_REVIEW} from './actionTypes'
import axios from 'axios'

//Plain JavaScript objects, action creators
//Dispatches the results


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
export const fetchCourses = input => {
    return (dispatch) => {
        dispatch(fetchCoursesBegin())
        // axios.get('http://it2810-39.idi.ntnu.no:3001/courses?'+input)
        axios.get('http://localhost:3001/courses?'+input)
        .then(response => {
            dispatch(fetchCoursesSuccess(response.data)) 
        })
        .catch(error => {
            dispatch(fetchCoursesFailure(error))
        })
    }
}
