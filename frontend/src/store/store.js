import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/combineReducers';
import initialState from './initialState';

//Specifying the use of Thunk as middleware
const middleware = [thunk]


export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
