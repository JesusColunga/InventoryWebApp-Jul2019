/* /client/src/components/SignUpBtn/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import SignUp from '../../modals/SignUp';

class SignUpBtn extends Component {
   //despliega = () => {console.log("despliega")};
   //despliega = () => { return <SignUp/> };
   despliega = function() { 
      const [show, setShow] = React.useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
   };
   // -----------------------------
   render() {
      return (
         <div className="">
            <Button 
               variant="outline-info"
               onClick={ function () {
                  const [show, setShow] = React.useState(false);

                  const handleClose = () => setShow(false);
                  const handleShow = () => setShow(true);
                
                  return (
                    <>
                      <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                      </Button>
                
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>
                  );
            
               }
               }
            >
               Sign Up 
            </Button>
         </div>
      );
   }
}

export default SignUpBtn;