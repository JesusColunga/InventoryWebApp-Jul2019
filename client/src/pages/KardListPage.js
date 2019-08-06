/* /client/src/pages/KardListPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class KardListPage extends Component {
   
   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />
            KardListPage
         </div>
      );
   }
}

export default KardListPage;