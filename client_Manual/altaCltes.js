// /client/altaCltes.js

let axios = require("axios");
const apiKey = require("./config/apiKey");

console.log("============================================");

axios
   .post("http://localhost:3000/api/associates/C/?apikey=" + apiKey, {
         user_id:      "Clte_1",
         name:         "Ferre-Cid",
         tax_id:       "FER123456-ABC",
         address:      "Av. Gvo Baz # 123",
         email:        "info@ferre.com",
         phone:        "5000-7000",
         notes:        ""
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));


axios
   .post("http://localhost:3000/api/associates/C/?apikey=" + apiKey, {
         user_id:      "Clte_2",
         name:         "Filtec",
         tax_id:       "FIL456789-ABC",
         address:      "Satelite",
         email:        "info@fil.com",
         phone:        "5000-8000",
         notes:        ""
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));


axios
   .post("http://localhost:3000/api/associates/C/?apikey=" + apiKey, {
         user_id:      "Clte_3",
         name:         "Tek",
         tax_id:       "TEK987654-abc",
         address:      "Reforma",
         email:        "info@tek.com",
         phone:        "5000-6000",
         notes:        ""
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));
