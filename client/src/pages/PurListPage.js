/* /client/src/pages/PurListPage.js   */
/* Creates page to list all purchases */

import React, { Component } from "react";
//import "./style.css"
import Nav            from "../components/Nav";
import ListButtonsBar from "../components/ListButtonsBar";
import ListBody       from "../components/ListBody";
import Footer         from "../components/Footer";
import axios          from "axios";
import {serverUrl}    from "../helpers/var";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname  = sessionStorage.getItem("lastname");
const usrEmail     = sessionStorage.getItem("email");

class PurListPage extends Component {
   /* ----------------------------------------------- */
   state = {
      titles:  ["document id", "date", "associate id", "internal ref", "external ref", "currency"],
      records: []
   };
   /* ----------------------------------------------- */
   componentDidMount() {
      this.searchRecords();
   };
   /* ----------------------------------------------- */
   searchRecords = () => {
      axios
         .get(serverUrl + "/api/exchange/P")
         .then  ( res => this.setState( { records: res.data } ) )
         .catch ( err => console.log("Error:", err) );
   };
   /* ----------------------------------------------- */
   
   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null }

            <Nav />

            <ListButtonsBar 
               title     = "List of Purchases"
               urlDetail = "/purchasesDetail"
            />

            <ListBody 
               state     = {this.state}
               urlDetail = "/purchasesDetail"
            />   {/* "id" field allways must be first */}

            <Footer msg1="" />

         </div>
      );
   }
}

export default PurListPage;