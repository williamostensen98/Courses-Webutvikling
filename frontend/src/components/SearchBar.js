import React from 'react';
import '../css/searchBar.css';
import {searchCourse, fetchCourses} from '../store/searchActions'
import {setQuery} from '../store/queryAction'
import { connect } from 'react-redux';
import {Component} from 'react';
import Button from './Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'


class SearchBar extends Component {

    //searchCourse triggers dispatching of text (in action.js), that triggers the SEARCH_COURSE-case i searchReducer 
    onChange = e => {
        this.props.searchCourse(e.target.value)
    }
    keyPressed = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.setQuery(this.props.text)
            this.props.fetchCourses(this.props.text, '')
        }
      }
   
    render() {
        return (
            <div className="searchbar-container">
                
                <Jumbotron id="jumbo" className="mt-5 text-center">
                    <div className="container">
                    <h2 className="mb-3">
                        <i className="fa fa-search"/> Search for course names or codes...
                    </h2>
                    <Form > 
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange} onKeyPress={this.keyPressed}/>   
                        <Button />
                    </Form> 
                    </div>
                 </Jumbotron>
                
               
            </div> 
        )
    }
}


const mapStateToProps = state => ({
    //"Får" courses fra combineReducers.js automatisk, da den blir satt som rootReducer i store.js
    text: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})

export default connect(mapStateToProps, {searchCourse, fetchCourses, setQuery})(SearchBar)

