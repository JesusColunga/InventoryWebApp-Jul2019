// /client/altaMovs.js

let axios = require("axios");
const apiKey = require("./config/apiKey");

console.log("============================================");

axios
   .post("http://localhost:3000/api/exchange/P/?apikey=" + apiKey, {
         document_type: "P",
         document_id:   "C1",
         date:          Date.now(),
         associate_id: "1",
         internal_ref: "Esta es la referencia interna",
         external_ref: "Esta es la referencia externa",
         currency:     "MXN",
         exchange_rate: 1,
         notes:        "Este es el encabezado de una compra"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));

axios
   .post("http://localhost:3000/api/exchange/S/?apikey=" + apiKey, {
         document_type: "S",
         document_id:   "V1",
         date:          Date.now(),
         associate_id: "3",
         internal_ref: "Esta es la referencia interna",
         external_ref: "Esta es la referencia externa",
         currency:     "USD",
         exchange_rate: 20.4896,
         notes:        "Este es el encabezado de una venta"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));
