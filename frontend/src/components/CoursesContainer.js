import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseCard from "./CourseCard"
import Filtering from "./Filtering"
import InifinteScroll from "react-infinite-scroller"

import {loadMoreCourses, fetchCourses} from '../store/searchActions'

export class CoursesContainer extends Component {
    


    render() {
        const {courses} = this.props;
        let content = '';
        let filter = '';
        
        // tries to add CourseCards or no result to content when searching
        try{
            // If the courses array har more than 0 elements a CourseCard is created for each of the courses in the array/dictionary
            // the same goes for the filter menu; if there is a content on the page the button for the filter menu will show 
            content = courses.length > 0 ? courses.map((course, index) => <CourseCard key={index} course={course} />) : <h4 style={{color: '#c0ccd4'}} className="center">The search got no results</h4>;
            filter = content !== '' ?  <Filtering/> : null; 
        }
        //  if nothing is written in the search input the content will be set to an empty string
        catch(error){
            content = null
        }
        // displays the content 
        return ( 
            
            <div className="coursecontainer container">  
                {filter}
                <div className="row">
                    
                    {content}
                </div>  
            </div>
        )  
    }
}


const mapStateToProps = state => ({
    courses: state.courses.coursedata.docs,
  })
  
  export default connect(mapStateToProps, {loadMoreCourses, fetchCourses})(CoursesContainer)
