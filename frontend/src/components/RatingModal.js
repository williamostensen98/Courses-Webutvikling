import React, { useState } from 'react'
import "../css/courseCard.css"
import "../css/modal.css"
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
            
            <Modal.Body id="background" style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
              <h2>Review</h2>
              <Review course={props.course}/>
            </Modal.Body>
            <Modal.Footer id="background">
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
  
    )
}
function RatingModal(props) {
    const [modalShow, setModalShow] = useState(false); // TODO - Change this from use of hooks to use of redux state manager
  
    return (
      <ButtonToolbar id="rating">
        <Button className="btn mt-4 review"  onClick={() => setModalShow(true)}>
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

