import React from 'react';
import '../css/searchBar.css';
import {searchCourse} from '../store/action'
import { connect } from 'react-redux';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

 
class SearchBar extends Component {

    //searchAction triggerer dispatch av text (action.js), som triggerer typen SEARCH_COURSE-casen i searchReducer, 
    onChange = e => {
        this.props.searchCourse(e.target.value)
    }

    render() {
        return (
            <div className="searchbar-container">
                
                <div className="jumbotron jumbotron-fluid mt-5 text-center container">
                    <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"/> Search for course names or codes...
                    </h1>
                    <Form >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange}/>
                        <Button className="btn btn-success btn-bg mt-3">Search</Button>
                    </Form> 
                    </div>
                </div>
                
               
            </div> 
        )
    }
}


const mapStateToProps = state => ({
    //"Får" courses fra combindeReducers.js automatisk, da den blir satt som rootReducer i store.js
    text: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})

export default connect(mapStateToProps, {searchCourse})(SearchBar)

