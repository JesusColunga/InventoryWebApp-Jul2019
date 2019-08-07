/* /client/src/components/ListButtonsBar/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";
//import swal from 'sweetalert';

//function ListButtonsBar () {
class ListButtonsBar extends Component {

      /* ---------------------------------------------------------- */
 render() {
      return (
         <>
            <div className="container">
               <div className="row">
               <div className="col-6">
                  {this.props.title}
               </div>

               <div className="col-6 text-right">
                  <Button variant="outline-success"
                          size="sm"
                          onClick={null} >
                     Add
                  </Button>
               </div>
               </div>
            </div>

         </>
      );
 }
}

export default ListButtonsBar;