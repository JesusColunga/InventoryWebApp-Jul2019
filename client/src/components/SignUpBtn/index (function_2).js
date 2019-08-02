/* /client/src/components/SignUpBtn/index.js */

import React /*, { Component }*/ from "react";
/*import "./style.css";*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import SignUp from '../../modals/SignUp';

// -----------------------------
// -----------------------------

function SignUpBtn () {
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSave = event => {
      console.log("Save:", event.target.value);
   };
 
      return (
         <>
            <Button variant="outline-info" onClick={handleShow} >
               Sign Up 
            </Button>
      
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>
                     Register to access the app
                  </Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  {/* ------------------ */}
                  <form>
                     <div className="row">
                        <div className="col-6">
                           <label> First Name </label>
                           <input type="text" 
                                  id="med-firstname" 
                                  className="form-control" 
                                  aria-describedby="med-FirstName"
                                  placeholder="John"/>

                        </div>
                        <div className="col-6">
                           <label> Last Name </label>
                           <input type="text" 
                                  id="med-lastname" 
                                  className="form-control" 
                                  aria-describedby="med-LastName" 
                                  placeholder="Doe"/>
                        </div>
                     </div>

                  </form>
                  {/* ------------------ */}
               </Modal.Body>

               <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                     Close
                  </Button>
                  <Button variant="primary" onClick={handleSave}>
                     Save Changes
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
   
      );
}

export default SignUpBtn;