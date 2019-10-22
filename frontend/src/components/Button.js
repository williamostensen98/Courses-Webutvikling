import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import {fetchCourses} from '../store/courseActions'
=======
import {fetchCourses} from '../store/searchAction'
>>>>>>> 5236af43868f58a386e81d61776df9bbc6c90fd3
import "../css/button.css"

export class Button extends Component {

    //fetchCourses triggers dispatching of text (in action.js), that triggers the FETCH-cases i searchReducer
    onClick = e => {
        e.preventDefault()
        this.props.fetchCourses(this.props.input)
    }
    keyPressed = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.fetchCourses(this.props.input)
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
    input: state.courses.text 
})


export default connect(mapStateToProps, {fetchCourses})(Button)
