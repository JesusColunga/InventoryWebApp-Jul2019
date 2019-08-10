/* /client/src/forms/ExchMasForm/index.js */
/* Exchange Master Form: Head information */

import React, { Component } from "react";
//import "./style.css"

class ExchMasForm extends Component {
   
   render() {
      return (
         <div className="container">
            <form>

               <div className="row">   {/* ---------- Row 1 ---------- */}
                  <div className="col-6">
                     <label> Document Id </label>
                     { this.props.state.action === "Add" ?
                        <input type="text" 
                           autoFocus
                           id="document_id" 
                           className="form-control" 
                           aria-describedby="document_id"
                           value={this.props.state.document_id}
                           onChange={this.props.handleChange} 
                        />
                       :
                        <input type="text" 
                               id="document_id" 
                               className="form-control" 
                               aria-describedby="document_id"
                               value={this.props.state.document_id}
                               onChange={this.props.handleChange} 
                        />
                     }
                  </div>
                  <div className="col-6">
                     <label> Date </label>
                     <input type="text" 
                            id="date" 
                            className="form-control" 
                            aria-describedby="date"
                            placeholder="YYYY-MM-DD"
                            value={this.props.state.date}
                            onChange={this.props.handleChange} 
                     />
                  </div>

               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-6">
                     <label> Associate Id </label>
                     <input type="text" 
                            id="associate_id" 
                            className="form-control" 
                            aria-describedby="associate_id"
                            value={this.props.state.associate_id}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 3 ---------- */}
                  <div className="col-6">
                     <label> Internal Reference </label>
                     <input type="text" 
                            id="internal_ref" 
                            className="form-control" 
                            aria-describedby="internal_ref"
                            value={this.props.state.internal_ref}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> External Reference </label>
                     <input type="text" 
                            id="external_ref" 
                            className="form-control" 
                            aria-describedby="external_ref" 
                            value={this.props.state.external_ref}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 4 ---------- */}
                  <div className="col-6">
                     <label> Currency </label>
                     <input type="text"
                            id="currency" 
                            className="form-control" 
                            aria-describedby="currency"
                            value={this.props.state.currency}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> Exchange Rate </label>
                     <input type="number" 
                            id="exchange_rate" 
                            className="form-control" 
                            aria-describedby="exchange_rate" 
                            value={this.props.state.exchange_rate}
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

export default ExchMasForm;