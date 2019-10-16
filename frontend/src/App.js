import React from 'react';
import "./default_files/App.css"
import "./default_files/index.css"
import SearchBar from './components/SearchBar';
import Header from "./components/Header";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';



export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return ( 
    <body>
      <div className="App"> 
        <Header />
        <SearchBar />
        <button onClick={() => dispatch(increment(5))}>
          INCREMENT
        </button>
        <button onClick={() => dispatch(decrement(5))}>
          DECREMENT
        </button>
        Counter: {counter}

      </div>
    </body>
  );
}
