import { SET_CODE_CLICKED,
    SET_NAME_CLICKED } from "./actionTypes"
    
export const setCodeClicked = (value) => dispatch => {
dispatch ({
   type: SET_CODE_CLICKED,
   clicked: value
})
}

export const setNameClicked = (value) => dispatch => {
dispatch ({
   type: SET_NAME_CLICKED,
   clicked: value
})
}
