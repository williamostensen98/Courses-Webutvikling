import React, { Component } from 'react'
import Card from "react-bootstrap/Card"
import Accordion from 'react-bootstrap/Accordion'
import RatingModal from "./RatingModal"
import GradeModal from "./GradeModal"
import "../css/courseCard.css"


export class CourseCard extends Component {
    constructor(props){
        super(props);
        this.toggleIconFlip = this.toggleIconFlip.bind(this); 
        this.renderAverageDifficulty = this.renderAverageDifficulty.bind(this);
    }
   
   // Calculates the average difficulty each course has gotten from reviews and return either this or "No ratings yet"
    renderAverageDifficulty() {
        
        if (this.props.course.difficulty.length > 0) {
            const difficulty = this.props.course.difficulty
            if (difficulty.length === 1) {
                return difficulty[0] + "/5"
            }
            let sum = 0;
            let length = difficulty.length ;
            for (var i in difficulty) {
                sum += parseInt(i)
            }
            
            return sum/length + "/5"
        }
        return "No ratings yet"
    }

    render() {
        const {course} = this.props; // defines course prop that is sent as prop from CourseContainer
        let taught_in = ''
        if(course.taught_in_spring && course.taught_in_autumn){ // If a course is taught in both autumn and spring 
            taught_in = 'Fall, Spring'                          // we want to show this 
        }
        else{
            taught_in = course.taught_in_spring ? "Spring" : "Fall" // check if course is taught in spring or fall
        }

        
        return (
            <div className="card-wrap container">
                
                <Accordion >
                    <Card id="card" > 
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={this.toggleIconFlip}>
                            <div className="row" >
                                <div className="col-9">
                                    {/* displays coursecode and name inside the card */}
                                    <h5>{course.course_code} - {course.norwegian_name}</h5> 
                                </div>
                                <div className="col">
                                    {/* Icon on the right side of the card */}
                                
                                    <i ref="icon" className="fas fa-chevron-down fa-2x"></i>
                                </div>
                            </div> 
                        </Accordion.Toggle>
                        {/* This is shown when clicking on the card */}
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <b>Credits:</b> {course.credits}
                                <br></br>
                                
                                <b>Taught in:</b> {taught_in}
                                <br></br>
                                <b>Content: </b> {course.content}
                                <br></br>
                                <b>Average difficulty: {this.renderAverageDifficulty()} </b>
                                <div className="row button-wrap">
                                    <div id="rating" className="col">
                                        {/* The popup modal for Review and ratings on the course */}
                                        <RatingModal course={course} /> 
                                    </div>
                                    <div id="grade" className="col">
                                        {/* The popup modal for displaying grades */}
                                        <GradeModal course_code={course.course_code}/>
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br></br>
            </div>
              
        )
    }

    // method for flipping the arrow-icon on the right side of the course card.
    toggleIconFlip() {
        this.refs.icon.classList.toggle('flip'); // adds class that flips the icon on right side of Card
    }
}

export default CourseCard
