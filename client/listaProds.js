// /client/listaProds.js

let axios = require("axios");
const apiKey = require("./config/apiKey");

console.log("============================================");

axios
   .get("http://localhost:3000/api/products/?apikey=" + apiKey)
   .then  (res => console.log("Respuesta:", res.status, res.statusText))
   .catch (err => console.log("Error:", err));
