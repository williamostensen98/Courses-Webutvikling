import React from 'react';
import './css/main.css';
import SearchBar from './components/SearchBar';
import {createStore} from "redux";

export default function App() {
  return ( 
    <div className="App"> 
      <SearchBar />
    </div>
  );
}
