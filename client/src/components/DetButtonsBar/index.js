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

                  { this.props.action === "Edit" ? 
                        <Button variant="outline-danger"
                                size="sm"
                                className="mx-1"
                                onClick={null} >
                           Delete
                        </Button>
                    : null
                  }

                  <Button variant="outline-primary"
                           size="sm"
                           className="mx-1"
                           onClick={this.handleBackClick} >
                     Back
                  </Button>

                  { this.props.action === "Edit" ? 
                        <Button variant="outline-primary"
                                size="sm"
                                className="mx-1"
                                onClick={this.props.handleSubmit} >
                           Save
                        </Button>
                    : null
                  }

                  { this.props.action === "Add" ? 
                        <Button variant="outline-primary"
                                size="sm"
                                className="mx-1"
                                onClick={this.props.handleSubmit} >
                           Add
                        </Button>
                    : null
                  }


               </div>
            </div>
         </div>

      </>
   );
 }
}

export default DetButtonsBar;