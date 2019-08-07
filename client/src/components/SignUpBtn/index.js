/* /client/src/components/SignUpBtn/index.js */

import React /*, { Component }*/ from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";
import SignUpModal from "../../modals/SignUpModal";
import Axios from "axios";

function SignUpBtn () {
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSave = (firstname, lastname, phone, email, password) => {

      Axios
         .post("http://localhost:3001/api/users",
         //.post("/api/users",
         {
            firstname: firstname,
            lastname:  lastname,
            phone:     phone,
            email:     email,
            password:  password   // bcrypt.hashSync(password, salt)
         })
         .then  (
            res => {
               if ( (typeof res.data === "string") &&
                    (res.data.substring(0, 5) === "Error") ) {
                  alert(res.data);
               } else {
                  setShow(false);
                  alert("Please Log In");
               };
            }
         )
         .catch (err => console.log("Error:", err));
      };
   // ---------------------------------------------------------------------
   
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