import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses} from '../store/action'
import "../css/button.css"

export class Button extends Component {

    //fetchCourses triggerer dispatch av text (action.js), som triggerer FETCH-casene i fetchReducer
    onClick = e => {
        e.preventDefault()
        this.props.fetchCourses(this.props.input)
    }
    render() {
        return (
            <button className="btn btn-success btn-bg mt-3"
                type = "button"
                onClick={this.onClick}
            >
            Search
            </button>
        )
    }
}

const mapStateToProps = (state) => ({
    input: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})

/* 
const mapDispatchToProps = {
    
} */

export default connect(mapStateToProps, {fetchCourses})(Button)
