import {createStore, myMiddleware } from 'redux'
import reducer from './store/reducer.js';



const store = createStore(reducer)
