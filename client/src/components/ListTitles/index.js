/* /client/src/components/ListTitles/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Table from 'react-bootstrap/Table'

class ListTitles extends Component {

      /* ---------------------------------------------------------- */
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Table striped bordered hover size="sm">
               <thead>
                  <tr>
                     { this.props.titles.map(
                         (value, index) =>{
                            return <th key={index}> {value} </th>
                         }
                       )
                     }
                  </tr>
               </thead>
            </Table>
          </div>
        </div>

      </>
    );
  }
}

export default ListTitles;