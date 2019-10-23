import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
            review: String(form.review.value),
            difficulty: parseInt(form.difficulty.value)
        }
        axios.put('http://it2810-39.idi.ntnu.no:3001/courses/'+ this.props.course.course_code, content)
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formReview">
                        <Form.Label>Write your review of this course here</Form.Label>
                        <Form.Control type="textarea" placeholder="This course is amazing..." name="review" required  />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formDifficulty">
                        <Form.Label>Difficulty</Form.Label>
                    <Form.Control type="number" placeholder="1-5" min="1" max="5" name="difficulty" required/>
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
