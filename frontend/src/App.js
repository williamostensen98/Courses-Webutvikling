import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./default_files/index.css"
import "./default_files/App.css"

import Landing from './components/Landing'
import Header from "./components/layout/Navbar"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
//import { connect } from 'react-redux';
import {Provider} from 'react-redux'
import {store} from './store/store'


class App extends Component {

  //Provider gjør at alle elementer under den i hierarkiet får rekursivt tilgang til store (og dermed også statesene)
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

/* export default connect(mapStateToProps, mapDispatchToProps)(App) */
export default App