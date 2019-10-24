import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses} from '../store/searchActions'
import {setQuery} from '../store/queryAction'
import "../css/button.css"

export class Button extends Component {

    //fetchCourses triggers dispatching of text (in action.js), that triggers the FETCH-cases i searchReducer
    onClick = e => {
        e.preventDefault()
        this.props.setQuery(this.props.input)
        this.props.fetchCourses(this.props.input,'')
        
    }


    keyPressed = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.setQuery(this.props.input)
            this.props.fetchCourses(this.props.input, '')
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

//Maps state 'text' to as a props named 'input'
const mapStateToProps = (state) => ({
    input: state.courses.text,
    query: state.query.query
})


export default connect(mapStateToProps, {fetchCourses, setQuery})(Button)
