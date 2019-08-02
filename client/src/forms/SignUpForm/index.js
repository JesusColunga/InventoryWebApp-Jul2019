/* /client/src/forms/SignUpForm/index.js */

import React, { Component } from "react";
//import "./style.css"

class SignUpForm extends Component {
   
   render() {
      return (
         <div className="">
            <form>
               <div className="row">
                  <div className="col-6">
                     <label> First Name </label>
                     <input type="text" 
                              id="firstname" 
                              className="form-control" 
                              aria-describedby="med-FirstName"
                              placeholder="John"
                              onChange={this.props.handleChange} />

                  </div>
                  <div className="col-6">
                     <label> Last Name </label>
                     <input type="text" 
                              id="lastname" 
                              className="form-control" 
                              aria-describedby="med-LastName" 
                              placeholder="Doe"
                              onChange={this.props.handleChange} />
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default SignUpForm;