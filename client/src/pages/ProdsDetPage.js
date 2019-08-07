/* /client/src/pages/ProdsDetPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
import DetButtonsBar from "../components/DetButtonsBar";
import ProdsForm from "../forms/ProdsForm";
import Footer from "../components/Footer";
import SweetAlert from "sweetalert2-react";
//import axios from "axios";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");
/*
*/
class ProdsDetPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user_id         : "",
         description     : "",
         product_type    : "",
         family          : "",
         existence       : 0,
         unit_measure    : "",
         cost            : 0,
         price           : 0,
         notes           : "",
         showFieldAlert  : false,
         titleFieldAlert : "",
         textFieldAlert  : "Please fill in the field."
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   /* ---------------------------------------------------------- */
   handleChange(event) {
      let newstate = {showFieldAlert  : false}; 
      newstate[event.target.id] = event.target.value; 
      this.setState(newstate); 
   }
   /* ---------------------------------------------------------- */
   handleSubmit(event) {
      //event.preventDefault();
      if (this.state.user_id.trim() === "") {
         this.setState({ titleFieldAlert: "User Id"        , showFieldAlert: true });
      } else 
      if (this.state.description.trim() === "") {
         this.setState({ titleFieldAlert: "Description"    , showFieldAlert: true });
      } else
      if ( (this.state.product_type.trim().toUpperCase() !== "P") &&
           (this.state.product_type.trim().toUpperCase() !== "S") ){
         this.setState({ titleFieldAlert: "Product Type"   , showFieldAlert: true });
      } else 
      if (this.state.unit_measure.trim() === "") {
         this.setState({ titleFieldAlert: "Unit of Measure", showFieldAlert: true });
      } else {
         this.props.handleSave(
            this.state.user_id.trim(),
            this.state.description.trim(),
            this.state.product_type.trim().toUpperCase(),
            this.state.family.trim(),
            this.state.existence.trim(),
            this.state.unit_measure.trim(),
            this.state.cost.trim(),
            this.state.price.trim(),
            this.state.notes.trim()
         );
         
         this.setState({
            user_id         : "",
            description     : "",
            product_type    : "",
            family          : "",
            existence       : 0,
            unit_measure    : "",
            cost            : 0,
            price           : 0,
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
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />
            <DetButtonsBar 
               title     = "Detail of Products"
               urlList   = "/productsList/"
               urlDetail = "/productsDetail/"
            />
            <ProdsForm />

            {this.state.user_id}
            
            <Footer msg1="" />

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

export default ProdsDetPage;