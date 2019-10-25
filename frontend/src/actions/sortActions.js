import { SET_CODE_CLICKED,
    SET_NAME_CLICKED, SET_ORDER } from "./actionTypes"
    
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

export const setOrder = (value) => dispatch => {
   dispatch ({
      type: SET_ORDER,
      clicked: value
   })
   }
