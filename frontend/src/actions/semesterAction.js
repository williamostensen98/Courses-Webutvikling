import { SET_CHOSEN_SEMESTER } from "./actionTypes"



export const setChosenSemester = (value) => dispatch => {
dispatch ({
   type: SET_CHOSEN_SEMESTER,
   payload: value
})
}