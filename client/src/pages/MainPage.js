/* /client/src/pages/MainPage.js */

import React, { Component } from "react";
import "./style.css"
import SignUpBtn from "../components/SignUpBtn";
import LogInBtn from "../components/LogInBtn";

class MainPage extends Component {
   
   render() {
      return (
         <div className="main">
            {sessionStorage.clear()}
            <h1> Inventory Management </h1>

            <div className="imgContainer">
               <img src="warehouse.jpg" alt="Warehouse" id="imgW"/>
            </div>

            <LogInBtn />

            <SignUpBtn />

            <p>
               This is a web app to controll your inventory <br></br>
               from any place you are <br></br>
               and any device you have
            </p>

         </div>
      );
   }
}

export default MainPage;