import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./default_files/index.css"
import "./default_files/App.css"

import Landing from './components/Landing'
import Header from "./components/layout/Navbar"




//import { connect } from 'react-redux';
import {Provider} from 'react-redux'


import {store} from './store/store'


class App extends Component {
/* 
  mapStateToProps = (state) => {
    return {
      //TODO Add mapStateToProps
      //EKS:
        //age: state.age
    }
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
      //TODO Add mapdispachToProps
      //EKS:
        //onAgeUp: () => dispatch({type: 'AGE_UP'})
    }
  } */

  render () {
    return ( 
      <Provider store={store}>
       
          <div className="App"> 
            
            <Header/>
            <Landing />
            
            
          </div>
   
      </Provider>
      )
  } 
}

/* export default connect(mapStateToProps, mapDispatchToProps)(App) */
export default App