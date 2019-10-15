import React from 'react';
import "./default_files/App.css"
import "./default_files/index.css"
import SearchBar from './components/SearchBar';
import Header from "./components/Header"
import { connect } from 'react-redux';

import store from './store/store'

class App extends Component {

  mapStateToProps = (state) => {
    return {
      //TODO Add mapStateToProps
      //EKS:
        //age: state.age
    }
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
      //TODO Add dispachToProps
      //EKS:
        //onAgeUp: () => dispatch({type: 'AGE_UP'})
    }
  }

  render () {
    return ( 
      <Provider store={store}>
          <body>
            <div className="App"> 
              <Header />
              <SearchBar />
            </div>
          </body>
        </Provider>
      )
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)