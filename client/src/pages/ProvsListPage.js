/* /client/src/pages/ProvsListPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class ProvsListPage extends Component {
   
   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />
            ProvsListPage
         </div>
      );
   }
}

export default ProvsListPage;