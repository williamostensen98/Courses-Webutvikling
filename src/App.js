import React from 'react';
import "./default_files/App.css"
import "./default_files/index.css"
import SearchBar from './components/SearchBar';
import Header from "./components/Header"
import { connect } from 'react-redux';



class App extends Component {

  mapStateToProps = (state) => {
    return {
      //TODO Add mapStateToProps
      //age: state.age hadde det vært age
    }
  }
  
  mapDispachToProps = (dispach) => {
    return {
      //TODO Add dispachToProps
      //onButtonClick: () => dispach({type: 'BUTTON_CLICK'})
    }
  }

  render () {
    return ( 
        <body>
          <div className="App"> 
            <Header />
            <SearchBar />
          </div>
        </body>
      )
  } 
}

export default connect(mapStateToProps, mapDispachToProps)(App)