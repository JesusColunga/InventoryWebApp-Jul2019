/* /client/src/pages/PurDetPage.js         */
/* Creates page for detail of one purchase */

import React, { Component } from "react";
//import "./style.css"
import Nav           from "../components/Nav";
import DetButtonsBar from "../components/DetButtonsBar";
import ExchMasForm   from "../forms/ExchMasForm";
import ExchCaptModal from "../modals/ExchCaptModal";
import ExchDetForm   from "../forms/ExchDetForm";
import Footer        from "../components/Footer";
import SweetAlert    from "sweetalert2-react";
import Axios         from "axios";
import {serverUrl}   from "../helpers/var";
import swal          from "sweetalert";
import Button        from "react-bootstrap/Button";
const usrFirstname = sessionStorage.getItem("firstname");
const usrLastname  = sessionStorage.getItem("lastname");
const usrEmail     = sessionStorage.getItem("email");

class PurDetPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         master_id       : "",
         document_id     : "",
         date            : "",   // debe ser fecha
         associate_id    : "",
         internal_ref    : "",
         external_ref    : "",
         currency        : "",
         exchange_rate   : 0,
         notes           : "",
         lines           : 0,
         showFieldAlert  : false,
         titleFieldAlert : "",
         textFieldAlert  : "Please fill in the field.",
         msg1            : "",
         urlProdId       : "",
         showDetModal    : false,
         showDetTable    : false,
         actionDet       : "",
         arrLines        : [],
         action          : ""   // Add / Edit
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   /* ---------------------------------------------------------- */
   clearStateVars() {
      this.setState({
         document_id     : "",
         date            : "",   // debe ser fecha
         associate_id    : "",
         internal_ref    : "",
         external_ref    : "",
         currency        : "",
         exchange_rate   : 0,
         notes           : "",
         lines           : 0,
         showFieldAlert  : false,
         titleFieldAlert : ""
      });
   }
   /* ---------------------------------------------------------- */
   componentDidMount () {
      const urlId = this.props.match.params;
      console.log("PurDetPage / componentDidMount ");
      if (Object.keys(urlId).length === 0) {
         let newstate = { action : "Add" };
         this.setState(newstate);
      } else {
         console.log("PurDetPage/componentDidMount - urlId.id", urlId.id);
         let newstate = { 
            action : "Edit",
            urlProdId : urlId.id,
            master_id : urlId.id
         };
         this.setState(newstate, () => this.loadRecord() );
      }
   }
   /* ---------------------------------------------------------- */
   loadRecord() {
      Axios
         .get(serverUrl + "/api/exchange/P/" + this.state.urlProdId)
         .then  (
            res => {
               let newstate = {
                  document_id     : res.data.document_id,
                  date            : res.data.date,
                  associate_id    : res.data.associate_id,
                  internal_ref    : res.data.internal_ref,
                  external_ref    : res.data.external_ref,
                  currency        : res.data.currency,
                  exchange_rate   : res.data.exchange_rate,
                  notes           : res.data.notes,
               };
               this.setState(newstate); 
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   }
   /* ---------------------------------------------------------- */
   handleChange(event) {
      let newstate = {showFieldAlert : false, msg1 : ""}; 
      newstate[event.target.id] = event.target.value; 
      this.setState(newstate); 
   }
   /* ---------------------------------------------------------- */
   handleSubmit(event) {
      //event.preventDefault();
      if (this.state.document_id.trim() === "") {
         this.setState({ titleFieldAlert: "Document Id", showFieldAlert: true });
      } else {
         if (this.state.action === "Add") {
            this.handleAdd(
               this.state.document_id.trim(),
               this.state.date,
               this.state.associate_id.trim(),
               this.state.internal_ref.trim(),
               this.state.external_ref.trim(),
               this.state.currency.trim(),
               this.state.exchange_rate,
               this.state.notes.trim()
            );
         } else {
            if (this.state.action === "Edit") {
               this.handleSave(
                  this.state.document_id.trim(),
                  this.state.date,
                  this.state.associate_id.trim(),
                  this.state.internal_ref.trim(),
                  this.state.external_ref.trim(),
                  this.state.currency.trim(),
                  this.state.exchange_rate,
                  this.state.notes.trim()
               );
            };
         };
      };
   }
   /* ---------------------------------------------------------- */
   handleAdd = (document_id, date, associate_id, internal_ref, external_ref,
                currency, exchange_rate, notes) => {
      Axios
      .post(serverUrl + "/api/exchange/P",
      {
         document_id   : document_id,
         date          : date,
         associate_id  : associate_id,
         internal_ref  : internal_ref,
         external_ref  : external_ref,
         currency      : currency,
         exchange_rate : exchange_rate,
         notes         : notes
      })
      .then  (
      res => {
         let newstate = {
            msg1      : "Head: " + res.statusText,
            master_id : res.data.id
         }; 
         this.setState(newstate, () => {
            this.handleShowModal();
            //if (res.status === 200) this.clearStateVars()  OjO: después de guardar la última partida !
         });
      }
      )
      .catch (err => {
         let newstate = {msg1  : "Error"};
         this.setState(newstate);
         console.log("Error:", err);
      });
};
   /* ---------------------------------------------------------- */
   handleSave = (document_id, date, associate_id, internal_ref, external_ref,
                 currency, exchange_rate, notes) => {
      Axios
         .put(serverUrl + "/api/exchange/P/" + this.state.urlProdId,
         {
            document_id   : document_id,
            date          : date,
            associate_id  : associate_id,
            internal_ref  : internal_ref,
            external_ref  : external_ref,
            currency      : currency,
            exchange_rate : exchange_rate,
            notes         : notes
            })
         .then  (
            res => {
               let newstate = {msg1  : "Head updated: " + res.statusText}; 
               this.setState(newstate);
               if (res.status === 200) swal("Record has been updated");
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   };
   /* ---------------------------------------------------------- */
   handleDelete = () => {
      Axios
         .delete(serverUrl + "/api/exchange/P/" + this.state.urlProdId)
         .then  (
            res => {
               let newstate = {msg1  : res.statusText}; 
               this.setState(newstate); 
               if (res.status === 200) {
                  swal("Record has been deleted")
                     .then(resp => {
                        if (resp) {
                           this.clearStateVars();
                           window.location = "/purchasesList";
                        }
                     });
               }
            }
         )
         .catch (err => {
            let newstate = {msg1  : "Error"};
            this.setState(newstate);
            console.log("Error:", err);
         });
   };
   /* ---------------------------------------------------------- */
   handleShowModal  = () => this.setState({ showDetModal: true });
   handleCloseModal = () => 
      {  
         //(this.state.actionDet === "Added") ? alert("PurDetPage/handleCloseModal/Added") : alert("PurDetPage/handleCloseModal/___");
         this.setState({ showDetModal: false,  showDetTable: true});
         
      }     
   handleSaveModal  = (line_no, product_id, quantity, unit_measure, 
                       unit_cost, unit_price, line_cost, line_price, notes) => {
         let newstateDet = { 
            actionDet : "Added"
         };
         this.setState( newstateDet );
               
          let line = this.state.lines + 1;
          //alert("save modal");
          Axios
          .post(serverUrl + "/api/exchangeD",
          {
            master_id     : this.state.master_id,
            line_no       : line,
            product_id    : product_id,
            quantity      : quantity,
            unit_measure  : unit_measure,
            unit_cost     : unit_cost,
            unit_price    : unit_price,
            line_cost     : line_cost,
            line_price    : line_price,
            notes         : notes,
            ExchangeOpMId : this.state.master_id
             })
          .then  (
            res => {
               console.log("Respuesta al grabar en la base detalle:", res);
               let newstate = {
                  msg2  : "Line: " + res.statusText,
                  msg3  : "No. Lines: " + line,
                  lines : line,
                  actionDet : "",
                  arrLines : this.state.arrLines.concat([{
                     id            : res.data.id,
                     line_no       : line,
                     product_id    : product_id,
                     quantity      : quantity,
                     unit_measure  : unit_measure
                  }])
               };
               console.log("Ya grabó en la base detalle. master_id: ", this.state.master_id, "Lines:", line, "Prod_id:", product_id);
               this.setState(newstate, () => {
                  console.log("PurDetPage/handleSaveModal/ya puso msg2");
                  this.handleShowModal();
                  console.log("nuevo arregle de partidas:", this.state.arrLines);
                  //if (res.status === 200) this.clearStateVars()  OjO: después de guardar la última partida !
               });
            }
          )
          .catch (err => {
             let newstate = {msg1  : "Error"};
             this.setState(newstate);
             console.log("Error:", err);
          });
    
       };
   /* ---------------------------------------------------------- */

   render() {
      return (
         <div className="">
            { ( (usrFirstname === null) || 
                (usrLastname  === null) || 
                (usrEmail     === null) ) ? window.location = "/" : null } 

            <Nav />

            <DetButtonsBar 
               title        = "Detail of Purchases"
               urlList      = "/purchasesList/"
               action       = {this.state.action}
               handleSubmit = {this.handleSubmit}
               handleDelete = {this.handleDelete}
            />

            <ExchMasForm 
               state        = {this.state}
               handleChange = {this.handleChange}
            />

            <div className="text-center">
               <Button size    = "sm"
                       variant = "outline-info"
                       onClick = {this.handleShowModal}
               >
                  Add line
               </Button>
            </div>
<p>action: {this.state.action}</p>
<p>master_id: {this.state.master_id}</p>
<p>document_id: {this.state.document_id}</p>
<p>lines: {this.state.lines}</p>
<p>urlProdId: {this.state.urlProdId}</p>
<p>actionDet: {this.state.actionDet}</p>


            <ExchCaptModal
               handleCloseModal = {this.handleCloseModal}
               handleSaveModal  = {this.handleSaveModal}
               show             = {this.state.showDetModal}
            />

            { /*
                (this.state.action === "Edit") || (this.state.lines > 0) ?
               <ExchDetForm master_id={this.state.master_id} /> : null
               */
              /*
              (this.state.showDetTable) ? 
              <ExchDetForm master_id={this.state.master_id} /> : null
              */

             <ExchDetForm 
               arrLines={this.state.arrLines} 
               action={this.state.action}
               handleShowModal={this.handleShowModal}
             />
            }

            <Footer msg1={this.state.msg1}
                    msg2={this.state.msg2}
                    msg3={this.state.msg3}
            />

            {/* --- Alert in case missing info in a field --- */}
            <SweetAlert
            show={this.state.showFieldAlert}
            title={this.state.titleFieldAlert}
            text={this.state.textFieldAlert}
            onConfirm={() => this.setState({ showFieldAlert: false })}
            />

         </div>
      );
   }
}

export default PurDetPage;