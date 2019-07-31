// /client/altaMovs.js

let axios = require("axios");
const apiKey = require("./config/apiKey");
//----------------------------------------
var fs = require("fs");
var s = "";   // String for general use.
//----------------------------------------

// Functions
//============================================================================ 
function writeLog (strg) {
   fs.writeFile("log.csv", 
                 strg, 
                 function(err) {
                   if (err) {
                       return console.log("Error writing the log file:", err);
                   };
                 }
                );
};
// - - - - - - - - - - - - - - 
function showKeys (obj, col) {
   let st = "";
   if (obj !== null &&
       obj !== undefined) {
      let arrKeys = Object.keys(obj);
      let arrVals = Object.values(obj);
      console.log(col, "arrKeys=", arrKeys);
      console.log(col, "arrVals=", arrVals);
      if (arrKeys.length > 0) {
         for (let ct=0; ct < arrKeys.length; ct++) {
            st = st + ( ','.repeat(col) + arrKeys[ct] + "\n");
            st = st + typeof (arrVals[ct]) + "\n";
            if (typeof (arrVals[ct]) === "string" ||
               typeof (arrVals[ct]) === "number") {
                  st = st + ','.repeat(col+1) + arrVals[ct] + "\n";
               }
            else {
               if (col===1) {
                  st = st + showKeys( arrVals[ct], col+1);
               }
            };
            
         };
         
      };
   };
   return st;
};
// - - - - - - - - - - - - - - 


//console.log("============================================");

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
   .then  (res => {
      //console.log("res=", res);
      //console.log("-------------------------");
      console.log(res.status, res.statusText);
      //writeLog( "res=" + JSON.stringify(res) + "\n" );
      console.log(res);
      //writeLog( "res=\n" + showKeys(res, 1) );
   })
   .catch (err => console.log("Error:", err));
/*
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
*/
/*
Al pasar la info para el archivo detalle
debo agregar el campo 
ExchangeOpMId
con el id del encabezado (Exchange_Op_M)
------------------------------------------
En 
/clases/S15-42 - Sa 8Jun2019/14
ver cómo traer los registros relacionados:

  app.get("/api/authors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
------------------------------------------
  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
------------------------------------------
*/