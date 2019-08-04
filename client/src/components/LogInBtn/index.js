/* /client/src/components/LogInBtn/index.js */

import React /*, { Component }*/ from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";
import LogInModal from "../../modals/LogInModal";
import Axios from "axios";
import apiKey from "../../config/apiKey";
import swal from 'sweetalert';
//import bcrypt from "bcryptjs";
//const  salt = bcrypt.genSaltSync(10);

function LogInBtn () {
   const [show, setShow] = React.useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleSave = (email, password) => {
      setShow(false);

      Axios
         .post("http://localhost:3001/api/userli/?apikey=" + apiKey, 
            {  email:     email,
               password:  password   // bcrypt.hashSync(password, salt)
            })
         .then  (
            res => {   // Give access to the user
               sessionStorage.setItem("firstname", res.data.firstname);
               sessionStorage.setItem("lastname", res.data.lastname);
               sessionStorage.setItem("email", res.data.email);
               window.location = "/MenuPage/";
            }
         )
         .catch (err => swal("Registro no encontrado"));
      };
      /* ---------------------------------------------------------- */
 
      return (
         <>
            <Button variant="outline-success"
                    onClick={handleShow} >
               Log In
            </Button>

            <LogInModal handleClose={handleClose}
                        handleSave={handleSave}
                        show={show} />
         </>
      );
}

export default LogInBtn;