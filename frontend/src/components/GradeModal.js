import React, { useState } from 'react'
import "../css/courseCard.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'



function CenteredModal(props) {

        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header >
              <Modal.Title id="contained-modal-title-vcenter">
                Grade stats
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Average grades</h4>
              <i className="fas fa-chart-bar fa-10x"></i>
              <p>
                Here you can choose a semester and see the average grade for this course in this semester.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
  
    )
}
function GradeModal() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <ButtonToolbar id="grade" >
        <Button className="mt-4"  variant="primary" onClick={() => setModalShow(true)}>
          Grades
        </Button>
  
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  

export default GradeModal

