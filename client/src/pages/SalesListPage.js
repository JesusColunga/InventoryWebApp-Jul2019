/* /client/src/pages/SalesListPage.js */
/* Creates page to list all sales     */

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

class SalesListPage extends Component {
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
         .get(serverUrl + "/api/exchange/S")
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
               title     = "List of Sales"
               urlDetail = "/salesDetail"
            />

            <ListBody 
               state     = {this.state}
               urlDetail = "/salesDetail/"   // Needs /
            />   {/* "id" field allways must be first */}

            <Footer msg1="" />

         </div>
      );
   }
}

export default SalesListPage;