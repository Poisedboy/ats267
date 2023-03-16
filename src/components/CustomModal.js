import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Supporting from "./Supporting";

const CustomModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{position: 'fixed', bottom: '10px', right: '30px'}}>
          DONATE
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          fullscreen={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>DONATION</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Supporting />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CustomModal;
