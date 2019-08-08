/* /client/src/pages/ProdsDetPage.js       */
/* Creates page for detail of one product  */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
import DetButtonsBar from "../components/DetButtonsBar";
import ProdsForm from "../forms/ProdsForm";
import Footer from "../components/Footer";
import SweetAlert from "sweetalert2-react";
import Axios from "axios";
import {serverUrl} from "../helpers/var";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

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
         textFieldAlert  : "Please fill in the field.",
         msg1            : "",
         urlProdId       : "",
         action          : ""   // Add / Edit
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   /* ---------------------------------------------------------- */
   componentDidMount () {
      const urlId = this.props.match.params;
      if (Object.keys(urlId).length === 0) {
         let newstate = { action : "Add" };
         this.setState(newstate, () => this.loadRecord() );
      } else {
         let newstate = { 
            action : "Edit",
            urlProdId : urlId.id 
         };
         this.setState(newstate, () => this.loadRecord() );
      }
   }
   /* ---------------------------------------------------------- */
   loadRecord() {
      Axios
         .get(serverUrl + "/api/products/" + this.state.urlProdId)
         .then  (
            res => {
               let newstate = {
                  user_id         : res.data.id,
                  description     : res.data.description,
                  product_type    : res.data.product_type,
                  family          : res.data.family,
                  existence       : res.data.existence,
                  unit_measure    : res.data.unit_measure,
                  cost            : res.data.cost,
                  price           : res.data.price,
                  notes           : res.data.notes,
               };
               this.setState(newstate); 
            }
         )
         .catch (err => console.log("Error:", err));
   }
   /* ---------------------------------------------------------- */
   handleChange(event) {
      let newstate = {showFieldAlert : false, msg1 : ""}; 
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
         this.handleSave(
            this.state.user_id.trim(),
            this.state.description.trim(),
            this.state.product_type.trim().toUpperCase(),
            this.state.family.trim(),
            this.state.existence,
            this.state.unit_measure.trim(),
            this.state.cost,
            this.state.price,
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
   handleSave = (user_id, description, product_type, family, existence,
                 unit_measure, cost, price, notes) => {
      Axios
         .post(serverUrl + "/api/products",
         {
            user_id      : user_id,
            description  : description,
            product_type : product_type,
            family       : family,
            existence    : existence,
            unit_measure : unit_measure,
            cost         : cost,
            price        : price,
            notes        : notes
         })
         .then  (
            res => {
               let newstate = {msg1  : res.statusText}; 
               this.setState(newstate); 
            }
         )
         .catch (err => console.log("Error:", err));
      };
   /* ---------------------------------------------------------- */

   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />

            <DetButtonsBar 
               title        = "Detail of Products"
               urlList      = "/productsList/"
               action       = {this.state.action}
               handleSubmit = {this.handleSubmit}
            />
            
            <ProdsForm 
               state        = {this.state}
               handleChange = {this.handleChange} />

            <Footer msg1={this.state.msg1} />

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