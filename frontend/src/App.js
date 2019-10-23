import React, {Component} from 'react';
import {connect} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./default_files/index.css"
import "./default_files/App.css"

import Landing from './components/Landing'
import Header from "./components/layout/Navbar"


import {Provider} from 'react-redux'
import {store} from './store/store'

import {loadMoreCourses, fetchCourses} from './store/searchActions'


class App extends Component {

  // event-listeners for scrolling. Enables dynamic loading upon reaching page bottom.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  componentWillUpdate() {
    this.scrollHeight = document.documentElement.scrollHeight;
    this.scrollTop = document.documentElement.scrollTop;
  }

  componentDidUpdate () {
    document.documentElement.scrollTop = this.scrollTop+(document.documentElement.scrollHeight-this.scrollHeight)
  }

  // Handler that is run when scrolling. Will load more items (increase pagination limit) if close to bottom
  handleScroll = (e) => {
    e.preventDefault()
    if (
      window.innerHeight + document.documentElement.scrollTop+200
      >= document.documentElement.scrollHeight
      && !this.props.isLoading
    )
     {
      this.props.loadMoreCourses().then(()=>{
          this.props.fetchCourses(this.props.query, "&limit="+this.props.limit) // Run fetch_items async upon state update.
      })
    }
  }

  //Provider recursively gives all the elements under it in the hierarchy  access to store (and states)
  render () {
    return ( 

        <div className="App"> 
          <Header />
          <Landing />
          
          
        </div>
      
    )
  } 
}

const mapStateToProps = state => ({
  query: state.query.query,
  limit: state.courses.limit,
  isLoading: state.courses.loading
})

export default connect(mapStateToProps, {loadMoreCourses, fetchCourses})(App)