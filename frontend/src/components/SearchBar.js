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
                
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange}/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    //"Får" courses fra combindeReducers.js automatisk, da den blir satt som rootReducer i store.js
    text: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})

export default connect(mapStateToProps, {searchCourse})(SearchBar)

