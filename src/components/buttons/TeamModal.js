import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

const TeamOffCanvas = ({name, text, position}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Details
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
                <Offcanvas.Title>{name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h4>{position}</h4>        
                <p>{text}</p>
                <Button onClick={handleClose}>
                    Back
                </Button>    
            </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default TeamOffCanvas;
