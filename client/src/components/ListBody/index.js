/* /client/src/components/ListBody/index.js */

import React from "react";
/*import "./style.css";*/
import Table from 'react-bootstrap/Table';
//import swal from 'sweetalert';

function ListBody(props) {
   return (
      <div className="container">
         <div className="row">
            <Table striped bordered hover size="sm">
               <thead className="text-center">
                  <tr>
                     { props.state.titles.map(
                         (value, index) =>{
                            return <th key={index}> {value} </th>
                         }
                       )
                     }
                  </tr>
               </thead>

               <tbody>
                     { props.state.records.map(
                           (rec, index) => (
                              <tr key={rec.id}
                                  onClick={ () => window.location = "/productsDetail/" + rec.id }
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
      </div>
   );
}

export default ListBody;