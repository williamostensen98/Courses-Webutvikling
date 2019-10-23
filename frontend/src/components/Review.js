import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import GradeModal from "./GradeModal"
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import axios from 'axios'


export class Review extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    static propTypes = {
        
    }

    onSubmit = (e) => {
        e.preventDefault()
        let form = e.target.elements
        let content = {
            difficulty: parseInt(form.difficulty.value),
            review: String(form.review.value)
            
        }
        
        axios.put('http://localhost:3001/courses/'+ this.props.course.course_code, content)
        document.getElementById("review").value = "";
        document.getElementById("difficulty").value = "";
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formReview">
                        <Form.Label>Write your review of this course here</Form.Label>
                        <Form.Control type="textarea" placeholder="This course is amazing..." name="review" required id="review" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formDifficulty">
                        <Form.Label>Difficulty</Form.Label>
                    <Form.Control type="number" placeholder="1-5" min="1" max="5" name="difficulty" required id="difficulty"/>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    </Form>
            </div>
        )
    }
}



export default Review
