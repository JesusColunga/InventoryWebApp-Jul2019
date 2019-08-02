/* /client/src/components/SignUpBtn/index.js */

import React /*, { Component }*/ from "react";
/*import "./style.css";*/
import Button from 'react-bootstrap/Button';
import SignUpModal from '../../modals/SignUpModal';

function SignUpBtn () {
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSave = event => {
      console.log("Save");
      setShow(false);
   };
 
      return (
         <>
            <Button variant="outline-info" 
                    onClick={handleShow} >
               Sign Up 
            </Button>

            <SignUpModal handleClose={handleClose}
                         handleSave={handleSave}
                         show={show} />
         </>
      );
}

export default SignUpBtn;