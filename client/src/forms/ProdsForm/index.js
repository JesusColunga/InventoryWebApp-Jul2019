/* /client/src/forms/ProdsForm/index.js */

import React, { Component } from "react";
//import "./style.css"

class ProdsForm extends Component {
   
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
               </div>

               <div className="row">   {/* ---------- Row 2 ---------- */}
                  <div className="col-12">
                     <label> Description </label>
                     <input type="text" 
                            id="description" 
                            className="form-control" 
                            aria-describedby="description"
                            value={this.props.state.description}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 3 ---------- */}
                  <div className="col-6">
                     <label> Product Type </label>
                     <input type="text" 
                            id="product_type" 
                            className="form-control" 
                            aria-describedby="product_type"
                            placeholder="P (product) / S (service)"
                            value={this.props.state.product_type}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> Family </label>
                     <input type="text" 
                            id="family" 
                            className="form-control" 
                            aria-describedby="family" 
                            value={this.props.state.family}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 4 ---------- */}
                  <div className="col-6">
                     <label> Existence </label>
                     <input type="number"
                            id="existence" 
                            className="form-control" 
                            aria-describedby="existence"
                            value={this.props.state.existence}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> Unit of Measure </label>
                     <input type="text" 
                            id="unit_measure" 
                            className="form-control" 
                            aria-describedby="unit_measure" 
                            value={this.props.state.unit_measure}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 5 ---------- */}
                  <div className="col-6">
                     <label> Cost </label>
                     <input type="number" 
                            id="cost" 
                            className="form-control" 
                            aria-describedby="cost"
                            value={this.props.state.cost}
                            onChange={this.props.handleChange} 
                     />
                  </div>
                  <div className="col-6">
                     <label> Price </label>
                     <input type="number" 
                            id="price" 
                            className="form-control" 
                            aria-describedby="price"
                            value={this.props.state.price}
                            onChange={this.props.handleChange} 
                     />
                  </div>
               </div>

               <div className="row">   {/* ---------- Row 6 ---------- */}
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

export default ProdsForm;