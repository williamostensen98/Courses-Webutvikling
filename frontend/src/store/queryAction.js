import { SET_QUERY } from "./actionTypes"

export const setQuery = (query) => dispatch => {
    dispatch ({
        type: SET_QUERY,
        new: query,
    })
}