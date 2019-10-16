/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import allReducer from './reducers';
import {Provider} from 'react-redux';


const store = createStore(
    allReducer,
    // Aktiverer Redux Dev Tools from Chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

