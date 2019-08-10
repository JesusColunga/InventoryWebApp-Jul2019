/* /client/src/forms/ExchCapForm/index.js */
/* Exchange Capture Form: input lines     */

import React, { Component } from "react";
//import "./style.css"

class ExchCapForm extends Component {
   
   render() {
      return (
         <div className="">
            <form>

               <div className="row">   {/* ---------- Row 1 ---------- */}
                  <div className="col-6">
                     <label> Product Id </label>
                     <input type="text" 
                            id="product_id" 
                            className="form-control" 
                            aria-describedby="product_id"
                            onChange={this.props.handleDetChange} />

                  </div>
               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-6">
                     <label> Quantity </label>
                     <input type="number" 
                            id="quantity" 
                            className="form-control" 
                            aria-describedby="quantity"
                            onChange={this.props.handleDetChange} />
                  </div>
                  
                  <div className="col-6">
                     <label> Unit of Measure </label>
                     <input type="text" 
                            id="unit_measure" 
                            className="form-control" 
                            aria-describedby="unit_measure"
                            disabled
                            onChange={this.props.handleDetChange} />

                  </div>

               </div>

               <div className="row">   {/* ---------- Row 3 ---------- */}
                  <div className="col-6">
                     <label> Unit Cost </label>
                     <input type="number" 
                            id="unit_cost" 
                            className="form-control" 
                            aria-describedby="unit_cost"
                            onChange={this.props.handleDetChange} />

                  </div>
                  <div className="col-6">
                     <label> Unit Price </label>
                     <input type="number" 
                            id="unit_price" 
                            className="form-control" 
                            aria-describedby="unit_price" 
                            onChange={this.props.handleDetChange} />
                  </div>
               </div>

            </form>
         </div>
      );
   }
}

export default ExchCapForm;