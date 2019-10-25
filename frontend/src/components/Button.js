import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses, resetLimit} from '../actions/courseActions'
import {setQuery} from '../actions/queryAction'
import "../css/button.css"

export class Button extends Component {

    //fetchCourses triggers dispatching of text (in action.js), that triggers the FETCH-cases i searchReducer
    onClick = e => {
        e.preventDefault()
        this.props.setQuery(this.props.input)  // Updates the query in state to be the input that was written in the searchbar
        this.props.fetchCourses(this.props.input,'') // Fetches courses based on the input in searchbar with the fetchcourses action in store
                                                    // since the only thing that should be taken into account when fetching courses
                                                    // is the input newQuery is set to an empty string (see fetchCourses in actions)
        this.props.resetLimit()
    }

    // Makes it possible to search by clicking on enter
    keyPressed = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.setQuery(this.props.input)
            this.props.fetchCourses(this.props.input, '')
            this.props.resetLimit()
        }
      }


    render() {
        return (
            
            <button id="searchbutton" className="btn btn-success btn-bg mt-3"
                type = "button"
                onClick={this.onClick}
                onKeyPress={this.keyPressed}
            >
            Search
            </button>
        )
    }
}

//Maps state 'text' and 'query' as props named 'input' and 'query'
const mapStateToProps = (state) => ({
    input: state.courses.text,
    query: state.query.query,
    limit: state.courses.limit
})


export default connect(mapStateToProps, {fetchCourses, setQuery, resetLimit})(Button)
