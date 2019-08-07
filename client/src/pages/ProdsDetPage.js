/* /client/src/pages/ProdsDetPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
import DetButtonsBar from "../components/DetButtonsBar";
import DetBody from "../components/DetBody";
import Footer from "../components/Footer";
//import axios from "axios";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class ProdsDetPage extends Component {
   
   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />
            <DetButtonsBar title="Detail of Products"/>
            <DetBody />
            <Footer a="" b=" " c=" " />
         </div>
      );
   }
}

export default ProdsDetPage;