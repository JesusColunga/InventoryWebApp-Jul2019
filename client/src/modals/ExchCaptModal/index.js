/* /client/src/modals/ExchCaptModal/index.js */

import React, { Component } from "react";
//import "./style.css";
import Modal       from "react-bootstrap/Modal";
import Button      from "react-bootstrap/Button";
import ExchCapForm from "../../forms/ExchCapForm";
import SweetAlert  from "sweetalert2-react";

class ExchCaptModal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         line_no         : 1,
         product_id      : "",
         quantity        : 0,
         unit_measure    : "",
         unit_cost       : 0,
         unit_price      : 0,
         line_cost       : 0,
         line_price      : 0,
         notes           : "",
         showFieldAlert  : false,
         titleFieldAlert : "",
         textFieldAlert  : "Please fill in the field."
      };

      this.handleDetChange = this.handleDetChange.bind(this);
      this.handleDetSubmit = this.handleDetSubmit.bind(this);
   }
   /* ---------------------------------------------------------- */
   handleDetChange(event) {
      let newstate = {showFieldAlert  : false}; 
      newstate[event.target.id] = event.target.value; 
      this.setState(newstate); 
   }
   /* ---------------------------------------------------------- */
   handleDetSubmit(event) {
      //event.preventDefault();
      if (this.state.product_id.trim() === "") {
         this.setState({ titleFieldAlert: "Product Id", showFieldAlert: true });
      } else {
         this.props.handleSaveModal(
            this.state.line_no,
            this.state.product_id.trim(),
            this.state.quantity,
            this.state.unit_measure.trim(),
            this.state.unit_cost,
            this.state.unit_price,
            this.state.line_cost,
            this.state.line_price,
            this.state.notes.trim()
         );
         this.props.handleCloseModal();
         this.setState({
            line_no         : 1,
            product_id      : "",
            quantity        : 0,
            unit_measure    : "",
            unit_cost       : 0,
            unit_price      : 0,
            line_cost       : 0,
            line_price      : 0,
            notes           : "",
            showFieldAlert  : false,
            titleFieldAlert : ""
         });
      };
   }
   /* ---------------------------------------------------------- */

   render() {
      return (
         <div className="">

            {/* --- Modal window to register new user --- */}
            <Modal show   = {this.props.show}
                   onHide = {this.props.handleCloseModal} >

               <Modal.Header closeButton>
                  <Modal.Title>
                     Register each line
                  </Modal.Title>
               </Modal.Header>

               <Modal.Body>
                  <ExchCapForm handleDetChange={this.handleDetChange} />
               </Modal.Body>

               <Modal.Footer>
                  <Button variant="primary"
                     onClick={this.handleDetSubmit} >
                     Add
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

export default ExchCaptModal;