/* /client/src/pages/ProdsListPage.js */

import React, { Component } from "react";
//import "./style.css"
import Nav     from "../components/Nav";
import ListButtonsBar from "../components/ListButtonsBar";
import ListTitles from "../components/ListTitles";
import ListBody from "../components/ListBody";
import Footer from "../components/Footer";
import axios from "axios";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname = sessionStorage.getItem("lastname");
const usrEmail = sessionStorage.getItem("email");

class ProdsListPage extends Component {
   /* ----------------------------------------------- */
   /*
   const records = () => {
      axios
         //.get("http://localhost:3001/api/products")
         .get("/api/products")
         .then  (res => console.log("Respuesta:", res.status, res.statusText))
         .catch (err => console.log("Error:", err));
   };
   */
   /*
   const handleSave = (firstname, lastname, phone, email, password) => {

      Axios
         .post("http://localhost:3001/api/users",
         //.post("/api/users",
         {
            firstname: firstname,
            lastname:  lastname,
            phone:     phone,
            email:     email,
            password:  password   // bcrypt.hashSync(password, salt)
         })
         .then  (
            res => {
               if ( (typeof res.data === "string") &&
                    (res.data.substring(0, 5) === "Error") ) {
                  alert(res.data);
               } else {
                  setShow(false);
                  alert("Please Log In");
               };
            }
         )
         .catch (err => console.log("Error:", err));
      };

   */
   /* ----------------------------------------------- */
   
   render() {
      const records = () => {
         console.log("axios - traer registros");
         axios
            //.get("http://localhost:3001/api/products")
            .get("/api/products")
            .then  (res => console.log("Respuesta:", res.status, res.statusText))
            .catch (err => console.log("Error:", err));
      };
   
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null }
            <Nav />
            <ListButtonsBar title="List of Products"/>
            <ListTitles titles={["user id", "description", "existence", "unit of m."]} />

            ProdsListPage
            <ListBody records={records} />
            <Footer a="Message to the user" b=" " c=" " />
         </div>
      );
   }
}

export default ProdsListPage;