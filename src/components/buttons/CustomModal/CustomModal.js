import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Supporting from "../../Supporting";
import { useLocation, useNavigate } from "react-router-dom";
import './custom-modal.css';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(-1)
    setShow(false);
  };
  const handleShow = () => {
    navigate('/support-modal');
    setShow(true);
  };

  useEffect(() => {
    if (location.pathname !== '/support-modal') {
      setShow(false);
    };
    if (location.pathname === '/support-modal') {
      setShow(true);
    };
  }, [location.pathname, show]);

    return (
      <>
        <Button variant="dark" className="glow" onClick={handleShow} style={{ position: 'fixed', bottom: '15px', right: '30px'}}>
          DONATE
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
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
