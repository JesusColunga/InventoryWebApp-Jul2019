/* /client/src/components/DetButtonsBar/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";
//import swal from 'sweetalert';

class DetButtonsBar extends Component {
 handleBackClick = () => window.location = this.props.urlList;
 handleSaveClick = () => window.location = this.props.urlDetail;
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
                  <Button variant="outline-primary"
                          size="sm"
                          onClick={this.handleBackClick} >
                     Back
                  </Button>
                  <Button variant="outline-primary"
                          size="sm"
                          onClick={this.handleSaveClick} >
                     Save
                  </Button>
               </div>
               </div>
            </div>

         </>
      );
 }
}

export default DetButtonsBar;