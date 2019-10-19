import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses} from '../store/action'

export class Button extends Component {

    //TODO Sende input til request
    onClick = e => {
        e.preventDefault()
        this.props.fetchCourses(this.props.text)
    }
    render() {
        return (
            <button
                type = "button"
                onClick={this.onClick}
            >
            Søk
            </button>
        )
    }
}

const mapStateToProps = (state) => ({
    text: state.courses.text //text er staten til Courses som blir oppdatert ved input i søkebaren
})
/* 
const mapDispatchToProps = {
    
} */

export default connect(mapStateToProps, {fetchCourses})(Button)
