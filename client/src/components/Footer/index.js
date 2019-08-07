/* /client/src/components/Footer/index.js */

import React /*, { Component }*/ from "react";
import "./style.css";

function Footer(props) {
   return (
     <div className="foot">
        <table className="table m-0 p-0">
           <tbody>
              <tr>
                <td className=" m-0 p-0"> {props.msg1} </td>
                <td className=" m-0 p-0"> {props.msg2} </td>
                <td className=" m-0 p-0"> {props.msg3} </td>
              </tr>
           </tbody>
        </table>
 
     </div>
   );
 }
 
 export default Footer;
 