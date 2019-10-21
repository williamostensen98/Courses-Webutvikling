import React, { Component } from 'react'
import Card from "react-bootstrap/Card"
import Accordion from 'react-bootstrap/Accordion'
import "../css/courseCard.css"

export class CourseCard extends Component {
    render() {
        const {course} = this.props; // fetches course thats sent as prop from CourseContainer
        let taught_in = ''
        taught_in = course.taught_in_spring ? "Spring" : "Fall" // check if course is taught in spring or fall
        return (
            <div className="card-wrap container">
                <Accordion>
                    <Card id="card"> 
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className="row">
                                <div className="col-9">
                                    {/* displays coursecode and name inside the card */}
                                    <h5>{course.course_code} - {course.norwegian_name}</h5> 
                                </div>
                                <div className="col">
                                    {/* Icon on the right side of the card */}
                                    <i className="fas fa-chevron-down fa-2x"></i>
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
                                <b>Content: </b>
                                {course.content}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br></br>
            </div>
              
        )
    }
}

export default CourseCard
