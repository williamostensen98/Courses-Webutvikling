import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./default_files/index.css"
import "./default_files/App.css"

import Landing from './components/Landing'
import Header from "./components/layout/Navbar"


import {Provider} from 'react-redux'
import {store} from './store/store'


class App extends Component {

  //Provider recursively gives all the elements under it in the hierarchy  access to store (and states)
  render () {
    return ( 
      <Provider store={store}> 
        <div className="App"> 
          <Header />
          <Landing />
          
          
        </div>
      </Provider>
    )
  } 
}

export default App