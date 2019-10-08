import React from 'react';
import './css/main.css';
import SearchBar from './components/SearchBar';
import {createStore} from "redux";
import Header from "./components/Header"

export default function App() {
  return ( 
    <div className="App"> 
      <Header />
      <SearchBar />
    </div>
  );
}
