import React from 'react';
import '../css/searchBar.css';
import {searchCourse} from '../store/action'
import { connect } from 'react-redux';
import {Component} from 'react';
 
class SearchBar extends Component {

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
    text: state.courses.text
})

export default connect(mapStateToProps, {searchCourse})(SearchBar)

