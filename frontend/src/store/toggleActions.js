import { TOGGLE_FILTER,
         TOGGLE_MODAL } from "./actionTypes";

export const toggleFilter = (value) => dispatch => {
    dispatch ({
        type: TOGGLE_FILTER, 
        now: value
    })
}

export const toggleModal = (value) => dispatch => {
    dispatch({
        type: TOGGLE_MODAL,
        now: value
    })
}