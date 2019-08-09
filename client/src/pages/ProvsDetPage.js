/* /client/src/pages/ProvsDetPage.js       */
/* Creates page for detail of one provider */

import React, { Component } from "react";
//import "./style.css"
import Nav           from "../components/Nav";
import DetButtonsBar from "../components/DetButtonsBar";
import AssocsForm    from "../forms/AssocsForm";
import Footer        from "../components/Footer";
import SweetAlert    from "sweetalert2-react";
import Axios         from "axios";
import {serverUrl}   from "../helpers/var";
import swal          from "sweetalert";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname  = sessionStorage.getItem("lastname");
const usrEmail     = sessionStorage.getItem("email");

class ProvsDetPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user_id         : "",
         name            : "",
         tax_id          : "",
         address         : "",
         email           : "",
         phone           : "",
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
   clearStateVars() {
      this.setState({
         user_id         : "",
         name            : "",
         tax_id          : "",
         address         : "",
         email           : "",
         phone           : "",
         notes           : "",
         showFieldAlert  : false,
         titleFieldAlert : ""
      });
   }
   /* ---------------------------------------------------------- */
   componentDidMount () {
      const urlId = this.props.match.params;
      if (Object.keys(urlId).length === 0) {
         let newstate = { action : "Add" };
         this.setState(newstate);
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
         .get(serverUrl + "/api/associates/P/" + this.state.urlProdId)
         .then  (
            res => {
               let newstate = {
                  user_id         : res.data.user_id,
                  name            : res.data.name,
                  tax_id          : res.data.tax_id,
                  address         : res.data.address,
                  email           : res.data.email,
                  phone           : res.data.phone,
                  notes           : res.data.notes,
               };
               this.setState(newstate); 
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });

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
         this.setState({ titleFieldAlert: "User Id", showFieldAlert: true });
      } else 
      if (this.state.name.trim() === "") {
         this.setState({ titleFieldAlert: "Name"   , showFieldAlert: true });
      } else {
         if (this.state.action === "Add") {
            this.handleAdd(
               this.state.user_id.trim(),
               this.state.name.trim(),
               this.state.tax_id.trim(),
               this.state.address.trim(),
               this.state.email.trim(),
               this.state.phone.trim(),
               this.state.notes.trim()
            );
         } else {
            if (this.state.action === "Edit") {
               this.handleSave(
                  this.state.user_id.trim(),
                  this.state.name.trim(),
                  this.state.tax_id.trim(),
                  this.state.address.trim(),
                  this.state.email.trim(),
                  this.state.phone.trim(),
                  this.state.notes.trim()
               );
            };
         };
      };
   }
   /* ---------------------------------------------------------- */
   handleAdd = (user_id, name, tax_id, address, email, phone, notes) => {
      Axios
         .post(serverUrl + "/api/associates/P",
         {  associate_type: "P",
            user_id : user_id,
            name    : name,
            tax_id  : tax_id,
            address : address,
            email   : email,
            phone   : phone,
            notes   : notes
         })
         .then  (
            res => {
               let newstate = {msg1  : res.statusText};
               this.setState(newstate, () => {
                  if (res.status === 200) this.clearStateVars()
               });
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   };
   /* ---------------------------------------------------------- */
   handleSave = (user_id, name, tax_id, address, email, phone, notes) => {
      Axios
         .put(serverUrl + "/api/associates/P/" + this.state.urlProdId,
         {  associate_type: "P",
            user_id : user_id,
            name    : name,
            tax_id  : tax_id,
            address : address,
            email   : email,
            phone   : phone,
            notes   : notes
         })
         .then  (
            res => {
               let newstate = {msg1  : res.statusText}; 
               this.setState(newstate);
               if (res.status === 200) swal("Record has been updated");
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   };
   /* ---------------------------------------------------------- */
   handleDelete = () => {
      Axios
         .delete(serverUrl + "/api/associates/P/" + this.state.urlProdId)
         .then  (
            res => {
               let newstate = {msg1  : res.statusText}; 
               this.setState(newstate); 
               if (res.status === 200) {
                  swal("Record has been deleted")
                     .then(resp => {
                        if (resp) {
                           this.clearStateVars();
                           window.location = "/providersList";
                        }
                     });
               }
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
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
               title        = "Detail of Providers"
               urlList      = "/providersList/"
               action       = {this.state.action}
               handleSubmit = {this.handleSubmit}
               handleDelete = {this.handleDelete}
            />

               <AssocsForm
                  state        = {this.state}
                  handleChange = {this.handleChange}
               />

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

export default ProvsDetPage;