/* /client/src/pages/ProdsListPage.js */
/* Creates page to list all products  */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
import ListButtonsBar from "../components/ListButtonsBar";
import ListBody from "../components/ListBody";
import Footer from "../components/Footer";
import axios from "axios";
import {serverUrl} from "../helpers/var";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class ProdsListPage extends Component {
   /* ----------------------------------------------- */
   state = {
      titles:  ["user id", "description", "existence", "unit"],
      records: []
   };
   /* ----------------------------------------------- */
   componentDidMount() {
      this.searchRecords();
   };
   /* ----------------------------------------------- */
   searchRecords = () => {
      axios
         .get(serverUrl + "/api/products")
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
            <ListButtonsBar title="List of Products"/>
            <ListBody state={this.state} />   {/* "id" field allways must be first */}
            <Footer msg1="" />
         </div>
      );
   }
}

export default ProdsListPage;