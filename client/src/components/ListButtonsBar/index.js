/* /client/src/components/ListButtonsBar/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Button from "react-bootstrap/Button";

class ListButtonsBar extends Component {
 handleAddClick = () => window.location = this.props.urlDetail;
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
                          onClick={this.handleAddClick} >
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