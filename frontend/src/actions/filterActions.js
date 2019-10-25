import { SET_FCLICKED,
         SET_SCLICKED } from "./actionTypes"
         
export const setFclicked = (value) => dispatch => {
    dispatch ({
        type: SET_FCLICKED,
        clicked: value
    })
}

export const setSclicked = (value) => dispatch => {
    dispatch ({
        type: SET_SCLICKED,
        clicked: value
    })
}
