/* /client/src/forms/ExchDetForm/index.js */
/* Exchange Detail Form: shows lines      */

import React, { Component } from "react";
//import "./style.css"
import axios        from "axios";
import {serverUrl}  from "../../helpers/var";
import Table        from 'react-bootstrap/Table';

class ExchDetForm extends Component {
   /* ----------------------------------------------- */
   constructor(props) {
      super(props);
      this.state = {
         titles:  ["line no", "product id", "quantity", "unit"],
         records: []
         };
   }
   /* ----------------------------------------------- */
   componentDidMount() {
      this.searchRecords();
   };
   /* ----------------------------------------------- */
   searchRecords = () => {
      let arr = [];
      let newstate = {};
      console.log("ExchDetFor/searchRecords/get:", serverUrl + "/api/exchangeD/" + this.props.master_id + "<<<");
      axios
         .get(serverUrl + "/api/exchangeD/" + this.props.master_id)
         .then  ( res => 
            {
               console.log("ExchDetFor/searchRecords/res:", res);
               res.data.map ( (x) => arr.push(x) ) 
               console.log("ExchDetFor/searchRecords/Ya terminó de hacer el arreglo:", arr);
               newstate = {records  : arr};
               //this.setState(newstate);
   
            }
               )
         .catch (err => {
            newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   };
   /* ----------------------------------------------- */

   render() {
      return (
         <div className="container">
            <div className="row">
               Records: {this.state.records}
               <Table striped bordered hover size="sm">
                  <thead className="text-center">
                     <tr>
                        { this.state.titles.map(
                           (value, index) =>{
                              return <th key={index}> {value} </th>
                           }
                        )
                        }
                     </tr>
                  </thead>

                  <tbody>
                        { this.state.records.map(
                              (rec, index) => (
                                 <tr key={rec.id}
                                    //onClick={ () => window.location = props.urlDetail + rec.id }
                                 >
                                    { Object.values(rec).slice(1).map(
                                       (field, index) => <td key={index}> {field} </td>
                                    ) 
                                    }
                                 </tr>
                              )
                        )
                        }
                  </tbody>
               </Table>
            </div>
            <div className="row"> - </div>
            <div className="row">
            {this.state.records}
            </div>
         </div>
      );
   }
}

export default ExchDetForm;