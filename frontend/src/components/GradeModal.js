import React, { useState, Component } from 'react'
import "../css/courseCard.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {toggleModal} from "../store/toggleActions"
import {connect} from 'react-redux'
import {fetchGrades} from '../store/gradeActions'
import Chart, {renderActiveShape} from "./Chart"
import Spinner from 'react-bootstrap/Spinner'



class CenteredModal extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
      return (
          <Modal
          {...this.props}
          
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Grade stats
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
            {/* <h4>Average grades</h4> */}
            
             <Chart />

            {/* <p>
              Here you can choose a semester and see the average grade for this course in this semester. */}
            {/* </p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          
        </Modal>

  )
}
}
export class GradeModal extends Component {

  //Toggles value of CenteredModal (child component) by using our predefined actions and states
  onClick = () => {
    this.props.toggleModal(this.props.check)
    this.props.fetchGrades(this.props.course_code)
  }

  toggleModal = () => {
    this.props.toggleModal(this.props.check)
  }


  render() {
    return (
      <ButtonToolbar id="grade" >
        <Button className="mt-4"  variant="primary" onClick={this.onClick}>
          Grades
        </Button>
  
        <CenteredModal
          show={this.props.check}
          onHide={this.toggleModal}
          grades={this.props.grades}
        />
      </ButtonToolbar>
    );
  }
  }

const mapStateToProps = (state) => ({
    check: state.toggle.modal,
    course: state.courses,
    grades: state.grades.gradedata,
    loading: state.grades.loading
})

export default connect(mapStateToProps, {toggleModal, fetchGrades })(GradeModal, CenteredModal)
