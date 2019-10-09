import React from 'react';
import "./default_files/App.css"
import "./default_files/index.css"
import SearchBar from './components/SearchBar';
import {createStore} from "redux";
import Header from "./components/Header"

export default function App() {
  return ( 
    <body>
      <div className="App"> 
        <Header />
        <SearchBar />
      </div>
    </body>
  );
}
