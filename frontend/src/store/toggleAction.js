import { TOGGLE_VALUE } from "../store/actionTypes";

export const toggleValue = (value) => dispatch => {
    dispatch ({
        type: TOGGLE_VALUE, 
        now: value
    })
}