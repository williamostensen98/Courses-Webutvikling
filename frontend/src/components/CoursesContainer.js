import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseCard from "./CourseCard"
import Filtering from "./Filtering"

import {loadMoreCourses, fetchCourses} from '../store/searchActions'

export class CoursesContainer extends Component {
    
    // event-listeners for scrolling. Enables dynamic loading upon reaching page bottom.
  componentWillMount() {
    window.addEventListener("scroll", e => {this.handleScroll(e)});
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
  
  // componentWillUpdate() {
  //   this.scrollHeight = document.documentElement.scrollHeight;
  //   this.scrollTop = document.documentElement.scrollTop;
  // }

  // componentDidUpdate () {
  //   document.documentElement.scrollTop = this.scrollTop+(document.documentElement.scrollHeight-this.scrollHeight)
  // }

  // Handler that is run when scrolling. Will load more items (increase pagination limit) if close to bottom
  handleScroll = (e) => {
    e.preventDefault()
    // if(this.props.limit >= total) //TODO trengs denne sjekken?
    // if (
    //   window.innerHeight + document.documentElement.scrollTop+200
    //   >= document.documentElement.scrollHeight
    //   && !this.props.isLoading
    // )
    if((window.innerHeight + window.scrollY+200) >= document.body.offsetHeight && !this.props.isLoading)
     {
      this.props.loadMoreCourses().then(()=>{
          this.props.fetchCourses(this.props.query, "&limit="+this.props.limit) // Run fetch_items async upon state update.
      })
    }
  }


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

// // fetches and stores coursesdata from state and into prop courses
// const mapStateToProps = (state) => ({
//     courses: state.courses.coursedata.docs
// })



// export default connect(mapStateToProps)(CoursesContainer)



const mapStateToProps = state => ({
    courses: state.courses.coursedata.docs,
    query: state.query.query,
    limit: state.courses.limit,
    isLoading: state.courses.loading
  })
  
  export default connect(mapStateToProps, {loadMoreCourses, fetchCourses})(CoursesContainer)
