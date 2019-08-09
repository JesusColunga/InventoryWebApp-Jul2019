/* /client/src/forms/AssocsForm/index.js */

import React, { Component } from "react";
//import "./style.css"

class AssocsForm extends Component {
   
   render() {
      return (
         <div className="container">
            <form>

               <div className="row">   {/* ---------- Row 1 ---------- */}
                  <div className="col-6">
                     <label> User Id </label>
                     { this.props.state.action === "Add" ?
                        <input type="text" 
                           autoFocus
                           id="user_id" 
                           className="form-control" 
                           aria-describedby="user-id"
                           value={this.props.state.user_id}
                           onChange={this.props.handleChange} 
                        />
                       :
                        <input type="text" 
                               id="user_id" 
                               className="form-control" 
                               aria-describedby="user-id"
                               value={this.props.state.user_id}
                               onChange={this.props.handleChange} 
                        />
                     }

                  </div>

                  <div className="col-6">
                     <label> Tax Id </label>
                        <input type="text" 
                           id="tax_id" 
                           className="form-control" 
                           aria-describedby="tax_id"
                           value={this.props.state.tax_id}
                           onChange={this.props.handleChange} 
                        />
                  </div>

               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-12">
                     <label> Name </label>
                     <input type="text" 
                            id="name" 
                            className="form-control" 
                            aria-describedby="name"
                            value={this.props.state.name}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 3 ---------- */}
                  <div className="col-12">
                     <label> Address </label>
                     <input type="text" 
                            id="address" 
                            className="form-control" 
                            aria-describedby="address"
                            value={this.props.state.address}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 4 ---------- */}
                  <div className="col-6">
                     <label> Email </label>
                     <input type="text"
                            id="email" 
                            className="form-control" 
                            aria-describedby="email"
                            value={this.props.state.email}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> Phone </label>
                     <input type="text" 
                            id="phone" 
                            className="form-control" 
                            aria-describedby="phone" 
                            value={this.props.state.phone}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 5 ---------- */}
                  <div className="col-12">
                     <label> Notes </label>
                     <input type="text" 
                            id="notes" 
                            className="form-control" 
                            aria-describedby="notes"
                            value={this.props.state.notes}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default AssocsForm;