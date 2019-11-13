import { SET_QUERY } from "./actionTypes"


//Sets state 'query' to the last query that was requested
export const setQuery = (query) => dispatch => {
    dispatch ({
        type: SET_QUERY,
        new: query,
    })
}