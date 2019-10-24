import React, { Component } from 'react'
import "../css/courseCard.css"
import "../css/modal.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {toggleModal} from "../store/toggleActions"
import {connect} from 'react-redux'
import {fetchGrades} from '../store/gradeActions'


const renderAverageDifficulty = (props) => {
  const grades = props.grades
  // console.log(grades)
}

function CenteredModal(props) {

        return (
            <Modal
            {...props}
           
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
          
          
            <Modal.Body id="background" style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto', 'backgroundColor': '#3b3f4b'}}>
              <h2>Average grades</h2>
              {renderAverageDifficulty(props)}
              <i className="fas fa-chart-bar fa-10x"></i>
              <p>
                Here you can choose a semester and see the average grade for this course in this semester.
              </p>
            </Modal.Body>
            <Modal.Footer id="background">
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            
          </Modal>
  
    )
}
export class GradeModal extends Component {

    //Toggles value of CenteredModal (child component) by using our predefined actions and states
    onClick = () => {
      this.props.toggleModal(this.props.check)
      this.props.fetchGrades(this.props.coursecode)
    }


    render() {
      return (
        <ButtonToolbar id="grade" >
          <Button className="mt-4"  variant="primary" onClick={this.onClick}>
            Grades
          </Button>
    
          <CenteredModal
            show={this.props.check}
            onHide={this.onClick}
          />
        </ButtonToolbar>
      );
    }
  }

const mapStateToProps = (state) => ({
    check: state.toggle.modal,
    course: state.courses.coursedata,
    grades: state.grades.gradedata
})

export default connect(mapStateToProps, {toggleModal, fetchGrades })(GradeModal, CenteredModal)
