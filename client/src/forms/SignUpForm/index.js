/* /client/src/forms/SignUpForm/index.js */

import React, { Component } from "react";
//import "./style.css"

class SignUpForm extends Component {
   
   render() {
      return (
         <div className="">
            <form>

               <div className="row">   {/* ---------- Row 1 ---------- */}
                  <div className="col-6">
                     <label> First Name </label>
                     <input type="text" 
                            id="firstname" 
                            className="form-control" 
                            aria-describedby="firstName"
                            placeholder="John"
                            onChange={this.props.handleChange} />

                  </div>
                  <div className="col-6">
                     <label> Last Name </label>
                     <input type="text" 
                            id="lastname" 
                            className="form-control" 
                            aria-describedby="lastName" 
                            placeholder="Doe"
                            onChange={this.props.handleChange} />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-6">
                     <label> Phone </label>
                     <input type="tel" 
                            id="phone" 
                            className="form-control" 
                            aria-describedby="phone"
                            placeholder="55 9999 9999"
                            onChange={this.props.handleChange} />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 3 ---------- */}
                  <div className="col-6">
                     <label> E-mail </label>
                     <input type="email" 
                            id="email" 
                            className="form-control" 
                            aria-describedby="email"
                            placeholder="email@example.com"
                            onChange={this.props.handleChange} />

                  </div>
                  <div className="col-6">
                     <label> Password (min 5 characters) </label>
                     <input type="password" 
                            id="password" 
                            className="form-control" 
                            aria-describedby="password" 
                            placeholder="password"
                            onChange={this.props.handleChange} />
                  </div>
               </div>

            </form>
         </div>
      );
   }
}

export default SignUpForm;