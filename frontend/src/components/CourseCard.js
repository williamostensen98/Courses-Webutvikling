import React, { Component } from 'react'
import Card from "react-bootstrap/Card"

export class CourseCard extends Component {
    render() {
        const {course} = this.props;
        return (
            <div>
                <Card> 
                    <Card.Body>
                        <h5>{course.code} - {course.norwegian_name}</h5>
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}

export default CourseCard
 