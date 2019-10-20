import React, { Component } from 'react'
import { connect } from 'react-redux'

import CourseCard from "./CourseCard"

export class CoursesContainer extends Component {
    render() {
        const {courses} = this.props.courses;
        let content = '';

        content = courses.length > 0 ? courses.map((course, index) => <CourseCard key={index} course={course} />) : null;
        return ( 
            <div  className="row">
                {content}
            </div>
        )  
    }
}

const mapStateToProps = (state) => ({
    courses: state.courses.courses
})



export default connect(mapStateToProps)(CoursesContainer)

