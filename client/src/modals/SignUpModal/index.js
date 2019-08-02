/* /client/src/modals/SignUpModal/index.js */

import React, { Component } from "react";
//import "./style.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignUpForm from '../../forms/SignUpForm';

class SignUpModal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstname: '',
         lastname : '',
         phone    : '',
         email    : '',
         password : ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      //this.setState({ value: event.target.value });
      //console.log("Evento", event.target.id);
      let newstate = {}; 
      newstate[event.target.id] = event.target.value; 
      this.setState(newstate); 
   }

   handleSubmit(event) {
      alert('A name was submitted: ' + this.state.firstname + ' ' + this.state.lastname);
      event.preventDefault();
      //this.props.handleSave
   }

   render() {
      return (
         <div className="">

            <Modal show={this.props.show}
               onHide={this.props.handleClose} >

               <Modal.Header closeButton>
                  <Modal.Title>
                     Register to access the app
                  </Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  <SignUpForm handleChange={this.handleChange} />
               </Modal.Body>

               <Modal.Footer>
                  <Button variant="primary"
                     onClick={this.handleSubmit} >
                     Save Changes
                  </Button>
               </Modal.Footer>

            </Modal>

         </div>
      );
   }
}

export default SignUpModal;