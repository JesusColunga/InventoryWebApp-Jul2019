/* /client/src/components/ListBody/index.js */

import React, { Component } from "react";
/*import "./style.css";*/
import Table from 'react-bootstrap/Table';

class ListBody extends Component {

      /* ---------------------------------------------------------- */
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
          ProdsListPage
            <Table striped bordered hover size="sm">
               <tbody>
                  <tr>
                     { this.props.records.map(
                         (value, index) => {
                            return <td key={index}> {value} </td>
                         }
                       )
                     }
                  </tr>
               </tbody>
            </Table>
          </div>
        </div>

      </>
    );
  }
}

export default ListBody;