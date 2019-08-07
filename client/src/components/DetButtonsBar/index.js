/* /client/src/components/DetButtonsBar/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";

class DetButtonsBar extends Component {
 handleBackClick = () => window.location = this.props.urlList;
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
                          onClick={this.props.handleSubmit} >
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