import { SET_FCLICKED,
         SET_SCLICKED } from "./actionTypes"
         

//When FALL-button is clicked
export const setFclicked = (value) => dispatch => {
    dispatch ({
        type: SET_FCLICKED,
        clicked: value
    })
}

//When SPRING-button is clicked
export const setSclicked = (value) => dispatch => {
    dispatch ({
        type: SET_SCLICKED,
        clicked: value
    })
}
