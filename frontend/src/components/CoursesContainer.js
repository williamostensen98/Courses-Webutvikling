import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseCard from "./CourseCard"

export class CoursesContainer extends Component {
    render() {
        const {courses} = this.props;
        let content = '';
        // tries to add CourseCards or no result to content when searching
        try{
            content = courses.length > 0 ? courses.map((course, index) => <CourseCard key={index} course={course} />) : <h4>The search got no results</h4>;
        }
        //  if nothing is written in the search input the content will be set to an empty string
        catch(error){
            content = "courses?course_code=tdt41"
        }
        // displays the content 
        return ( 
            <div  className="row">
                {content}
            </div>
        )  
    }
}

// fetches and stores coursesdata from state and into prop courses
const mapStateToProps = (state) => ({
    courses: state.courses.coursedata.docs
})



export default connect(mapStateToProps)(CoursesContainer)

