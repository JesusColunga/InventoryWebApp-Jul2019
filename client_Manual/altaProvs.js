// /client/altaProvs.js

let axios = require("axios");
const apiKey = require("./config/apiKey");

console.log("============================================");

axios
   .post("http://localhost:3000/api/associates/P/?apikey=" + apiKey, {
         user_id:      "Prv_1",
         name:         "Aspel de Mex",
         tax_id:       "AME123456-ABC",
         address:      "Cda Suiza",
         email:        "info@aspel.com",
         phone:        "5325-2323",
         notes:        "Proveedor Aspel"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));


axios
   .post("http://localhost:3000/api/associates/P/?apikey=" + apiKey, {
         user_id:      "Prv_2",
         name:         "Vigo Rep",
         tax_id:       "VIG456789-ABC",
         address:      "San Mateo",
         email:        "info@vigo.com",
         phone:        "5600-8888",
         notes:        "Proveedor TimeWork"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));


axios
   .post("http://localhost:3000/api/associates/P/?apikey=" + apiKey, {
         user_id:      "Prv_3",
         name:         "Intcomex",
         tax_id:       "INT987654-abc",
         address:      "Tlalnepantla",
         email:        "info@intcomex.com",
         phone:        "5000-6000",
         notes:        "Proveedor Intcomex"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));
