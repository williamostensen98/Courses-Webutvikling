import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux';
import axios from 'axios'


export class Review extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.renderAlert = this.renderAlert.bind(this)
        this.renderReviews = this.renderReviews.bind(this)
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
        
        axios.put('http://localhost:3001/courses/'+ this.props.course.course_code, content) // TODO - change this to database om server
        document.getElementById("review").value = "";
        document.getElementById("difficulty").value = "";
        const alert = this.renderAlert();
        ReactDOM.render(alert, document.getElementById("alert-container"))
    }

    // Render green alert message to user after a review is successfully added to the course document in the db.
    renderAlert = () => {
        return (
        <Alert variant="success">
            Your review was successfully added! 
        </Alert>
        )
    }


    // Rendering reviews from the course document in the database, along with the difficulty the reviewer gave.
    renderReviews = () => {
        let reviews = this.props.course.reviews.slice(0, 6)
        let difficulty = this.props.course.difficulty.slice(0, 6)
        let i = 0;
        let myReviews = reviews.map(rev => <h5 style={{'fontStyle' : 'italic', 'color' : 'grey'}}>
            "{rev}" - {difficulty[i++]}
            </h5>
        )
        return (
            <div className="student-reviews">
                {myReviews }
            </div>
        )
    }


    render() {
        return (
            <div>
                <div id="alert-container"></div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formReview">
                        <h5>Write your review of this course here</h5>
                        <Form.Control type="textarea" placeholder="This course is amazing..." name="review" required id="review" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formDifficulty">
                        <h5>Difficulty</h5>
                    <Form.Control type="number" placeholder="1-5" min="1" max="5" name="difficulty" required id="difficulty"/>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    </Form>
                    <br/>
                
                
                <div className="review-wrapper">
                    <h2 style={{'fontStyle': 'bold'}}>Other students reviews:</h2>
                    {console.log(this.props.course)}
                    {this.renderReviews()}

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    grades: state.grades.gradedata
})


export default connect(mapStateToProps)(Review)
