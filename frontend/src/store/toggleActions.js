//Actions for toggling values used in GUI

import { TOGGLE_FILTER,
         TOGGLE_MODAL } from "./actionTypes";


//Toggles state for the filter-footer in Filter.js
export const toggleFilter = (value) => dispatch => {
    dispatch ({
        type: TOGGLE_FILTER, 
        now: value
    })
}

//Toogles state for the grade modal in GradeModal.js
export const toggleModal = (value) => dispatch => {
    dispatch({
        type: TOGGLE_MODAL,
        now: value
    })
}