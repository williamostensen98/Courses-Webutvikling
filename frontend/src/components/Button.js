import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses} from '../store/action'

export class Button extends Component {

    onClick = () => this.props.fetchCourses()

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
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
