import React from 'react';
import '../css/searchBar.css';
import {searchCourse} from '../store/action'
import { connect } from 'react-redux';
import {Component} from 'react';
 
class SearchBar extends Component {

    //searchAction triggerer dispatch av text (action.js), som triggerer typen SEARCH_COURSE-casen i searchReducer, 
    onChange = e => {
        this.props.searchCourse(e.target.value)
    }

    render() {
        return (
            <div className="searchbar-container">
                <input id="searchBar" 
                        type="text" 
                        placeholder="Search courses, coursecodes or grades"
                        onChange={this.onChange}
                    />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    //"Får" courses fra combindeReducers.js automatisk, da den blir satt som rootReducer i store.js
    text: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})

export default connect(mapStateToProps, {searchCourse})(SearchBar)

