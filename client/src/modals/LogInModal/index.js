/* /client/src/modals/LogInModal/index.js */

import React, { Component } from "react";
//import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LogInForm from "../../forms/LogInForm";
import SweetAlert from "sweetalert2-react";

class LogInModal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email           : "",
         password        : "",
         showFieldAlert  : false,
         titleFieldAlert : "",
         textFieldAlert  : "Please fill in the field."
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      let newstate = {showFieldAlert  : false}; 
      newstate[event.target.id] = event.target.value; 
      this.setState(newstate); 
   }

   handleSubmit(event) {
      //event.preventDefault();
      if (this.state.email.trim() === "") {
         this.setState({ titleFieldAlert: "E-mail", showFieldAlert: true });
      } else 
      if (this.state.password.trim().length < 5) {
         this.setState({ titleFieldAlert: "Check the Password", showFieldAlert: true });
      } else {
         this.props.handleSave(
            this.state.email.trim(),
            this.state.password.trim()
         );
         
         this.setState({
            email           : "",
            password        : "",
            showFieldAlert  : false,
            titleFieldAlert : ""
         });
         
      };
   }

   render() {
      return (
         <div className="">

            {/* --- Modal window for Log In --- */}
            <Modal show={this.props.show}
               onHide={this.props.handleClose} >

               <Modal.Header closeButton>
                  <Modal.Title>
                     Log In to access the app
                  </Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  <LogInForm handleChange={this.handleChange} />
               </Modal.Body>

               <Modal.Footer>
                  <Button variant="primary"
                     onClick={this.handleSubmit} >
                     Submit
                  </Button>
               </Modal.Footer>

            </Modal>

            {/* --- Alert in case missing info in a field --- */}
            <SweetAlert
            show={this.state.showFieldAlert}
            title={this.state.titleFieldAlert}
            text={this.state.textFieldAlert}
            onConfirm={() => this.setState({ showFieldAlert: false })}
            />
         </div>
      );
   }
}

export default LogInModal;