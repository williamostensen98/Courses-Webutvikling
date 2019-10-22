import React, { useState } from 'react'
import "../css/courseCard.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Review from "./Review"



function CenteredModal(props) {

        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2>Review of Course</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Review</h4>
              <Review course={props.course}/>
              {/* <p>
                Here you can add your own rating with level of difficulty and a comment on the subject.
              </p> */}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
  
    )
}
function RatingModal(props) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <ButtonToolbar id="rating">
        <Button className="mt-4" variant="primary" onClick={() => setModalShow(true)}>
          Review {props.course.course_code}
        </Button>
  
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          course={props.course}
          
        />
      </ButtonToolbar>
    );
  }
  

export default RatingModal

