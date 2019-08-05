/* /client/src/pages/SalesDetPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class SalesDetPage extends Component {
   
   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />
            SalesDetPage
         </div>
      );
   }
}

export default SalesDetPage;