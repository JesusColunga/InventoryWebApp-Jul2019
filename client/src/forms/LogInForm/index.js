/* /client/src/forms/LogInForm/index.js */

import React, { Component } from "react";
//import "./style.css"

class LogInForm extends Component {
   
   render() {
      return (
         <div className="">
            <form>

               <div className="row">   {/* ---------- Row 1 ---------- */}
                  <div className="col-1"></div>
                  <div className="col-10">
                     <label> E-mail </label>
                     <input type="email" 
                           id="email" 
                           className="form-control" 
                           aria-describedby="email"
                           onChange={this.props.handleChange} />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-1"></div>
                  <div className="col-10">
                     <label> Password </label>
                     <input type="password" 
                            id="password" 
                            className="form-control" 
                            aria-describedby="password" 
                            onChange={this.props.handleChange} />
                  </div>
               </div>

            </form>
         </div>
      );
   }
}

export default LogInForm;