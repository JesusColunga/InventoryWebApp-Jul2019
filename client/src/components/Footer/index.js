/* /client/src/components/Footer/index.js */

import React /*, { Component }*/ from "react";
import "./style.css";

function Footer(props) {
   return (
     <div className="foot">
        <table className="table m-0 p-0">
           <tbody>
              <tr>
                <td className=" m-0 p-0"> {props.a} </td>
                <td className=" m-0 p-0"> {props.b} </td>
                <td className=" m-0 p-0"> {props.c} </td>
              </tr>
           </tbody>
        </table>
 
     </div>
   );
 }
 
 export default Footer;
 