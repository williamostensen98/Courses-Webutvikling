import React, { Component } from 'react'
import Card from "react-bootstrap/Card"
import Accordion from 'react-bootstrap/Accordion'
import RatingModal from "./RatingModal"
import GradeModal from "./GradeModal"
import "../css/courseCard.css"
import axios from "axios";

export class CourseCard extends Component {

    constructor(props){
        super(props);
        this.toggleSidenav = this.toggleSidenav.bind(this);
    }
    
    componentDidMount() {
        this.calculateAverageGrade();
    }
    componentDidUpdate() {
        this.calculateAverageGrade();
    }

    calculateAverageGrade = async () => {
        try {
            let docs = await axios.get("http://it2810-39.idi.ntnu.no:3001/courses/" + this.props.course.course_code + "/grades")
            let semesters = docs.data
            // console.log(semesters)
            
        }
        
        catch (err) {
            // console.log(err)
        }
        let all = document.getElementsByClassName("average_grade");
        console.log(all[0])
        for (let i; i < 10; i++) {
            all[i] = <p className="average_grade">7</p> 
        }
        // let semesters = docs.data.docs[0].semesters
        // console.log("Docs: ",semesters)
        // let total = semesters.forEach(function(sem) {
        //     total += sem.average_grade
        // })
    }

    render() {
        
        const {course} = this.props; // fetches course thats sent as prop from CourseContainer
        let taught_in = ''
        taught_in = course.taught_in_spring ? "Spring" : "Fall" // check if course is taught in spring or fall
        const average_grade= this.calculateAverageGrade()
        return (
            <div className="card-wrap container">
                
                <Accordion>
                    <Card ref="card" id="card"> 
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className="row">
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
                                <b>Average grade: </b> <p className="average_grade"></p> 
                                <div className="row">
                                    <div id="rating" className="col">
                                        <RatingModal course={course} />
                                    </div>
                                    <div id="grade" className="col">
                                        <GradeModal coursecode={course.course_code}/>
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

   

    toggleSidenav() {
        this.refs.icon.classList.toggle('flip');
    }

    componentDidMount() {
        this.refs.card.addEventListener('click', this.toggleSidenav);
    }

    componentWillUnmount() {
        this.refs.card.removeEventListener('click', this.toggleSidenav);
    }
}

export default CourseCard
