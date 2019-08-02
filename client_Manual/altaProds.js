// /client/altaProds.js

let axios = require("axios");
const apiKey = require("./config/apiKey");

console.log("============================================");

axios
   .post("http://localhost:3000/api/products/?apikey=" + apiKey, {
         user_id:      "A9TIM-1000",
         description:  "1,000 Timbres Aspel",
         product_type: "P",
         family:       "Asp",
         existence:    1,
         unit_measure: "Srvc",
         cost:         1000,
         price:        1400,
         notes:        "Servicio de Timbrado Aspel"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));


axios
   .post("http://localhost:3000/api/products/?apikey=" + apiKey, {
         user_id:      "A9TIM-2000",
         description:  "2,000 Timbres Aspel",
         product_type: "P",
         family:       "Asp",
         existence:    2,
         unit_measure: "Srvc",
         cost:         2000,
         price:        1500,
         notes:        "Servicio de Timbrado Aspel"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));

axios
   .post("http://localhost:3000/api/products/?apikey=" + apiKey, {
         user_id:      "A9TIM-3000",
         description:  "3,000 Timbres Aspel",
         product_type: "P",
         family:       "Asp",
         existence:    3,
         unit_measure: "Srvc",
         cost:         3000,
         price:        1600,
         notes:        "Servicio de Timbrado Aspel"
   })
   .then  (res => console.log(res.status, res.statusText))
   .catch (err => console.log("Error:", err));
