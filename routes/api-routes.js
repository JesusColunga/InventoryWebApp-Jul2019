// /server/routes/api-routes.js

var db = require("../models");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// Routes
// =====================================================================
module.exports = function (app) {

   // ------------------------------------------- Products
   app.post("/api/products", function(req, res) {          // Create
         db.Product.create({
            user_id:      req.body.user_id,
            description:  req.body.description,
            product_type: req.body.product_type,
            family:       req.body.family,
            existence:    req.body.existence,
            unit_measure: req.body.unit_measure,
            cost:         req.body.cost,
            price:        req.body.price,
            notes:        req.body.notes
         }).then(function(dbRes) {
            res.json(dbRes);
         });
   });

   app.get("/api/products/:id", function(req, res) {       // Read (one)
      db.Product.findOne({
         where: {id: req.params.id}
      }).then(function(dbRes) {
         res.json(dbRes);
      });
   });

   app.get("/api/products", function(req, res) {           // Read (all)
         db.Product.findAll( 
               {attributes: ["id", "user_id", "description", "existence", "unit_measure"]} 
            )
            .then(function(dbRes) {
               res.json(dbRes);
            });
   });

   app.put("/api/products/:id", function(req, res) {       // Update
         db.Product.update(req.body, {
            where: {id: req.params.id}
         }).then(function(dbRes) {
            res.json(dbRes);
         });
   });

   app.delete("/api/products/:id", function(req, res) {    // Delete
         db.Product.destroy({
            where: {id: req.params.id}
         }).then(function(dbRes) {
            res.json(dbRes);
         });
   });

   // ------------------------------------------- Associates
   app.post("/api/associates/:type", function(req, res) {          // Create
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.create({
               associate_type: req.params.type,
               user_id:        req.body.user_id,
               name:           req.body.name,
               tax_id:         req.body.tax_id,
               address:        req.body.address,
               email:          req.body.email,
               phone:          req.body.phone,
               notes:          req.body.notes
            }).then(function(dbRes) {
               res.json(dbRes);
            })
            .catch(function(err) {
               res.status(400).json(err)
            });
   
         };
   });

   app.get("/api/associates/:type", function(req, res) {           // Read (all)
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.findAll({
               attributes: ["id", "user_id", "name", "tax_id", "email", "phone"],
               where: {associate_type: req.params.type}
            })
               .then(function(dbRes) {
                  res.json(dbRes);
               });
         };
   });

   app.get("/api/associates/:type/:id", function(req, res) {       // Read (one)
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.findOne({
               where: {
                  id: req.params.id,
                  associate_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   app.put("/api/associates/:type/:id", function(req, res) {       // Update
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.update(req.body,{
               where: {
                  id: req.params.id,
                  associate_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   app.delete("/api/associates/:type/:id", function(req, res) {    // Delete
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.destroy({
               where: {
                  id: req.params.id,
                  associate_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   // ------------------------------------------- Exchange
   app.post("/api/exchange/:type", function(req, res) {          // Create
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.create({
               document_type: req.params.type,
               document_id:   req.body.document_id,
               date:          req.body.date,
               associate_id:  req.body.associate_id,
               internal_ref:  req.body.internal_ref,
               external_ref:  req.body.external_ref,
               currency:      req.body.currency,
               exchange_rate: req.body.exchange_rate,
               notes:         req.body.notes
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   app.get("/api/exchange/:type", function(req, res) {           // Read (all)
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.findAll({
               attributes: ["id", "document_id", "date", "associate_id", "internal_ref", "external_ref", "currency"],
               where: {document_type: req.params.type}
            })
               .then(function(dbRes) {
                  res.json(dbRes);
               });
         };
   });

   app.get("/api/exchange/:type/:id", function(req, res) {       // Read (one)
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.findOne({
               where: {
                  id: req.params.id,
                  document_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   app.put("/api/exchange/:type/:id", function(req, res) {       // Update
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.update(req.body,{
               where: {
                  id: req.params.id,
                  document_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   app.delete("/api/exchange/:type/:id", function(req, res) {    // Delete
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.destroy({
               where: {
                  id: req.params.id,
                  document_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
   });

   // ------------------------------------------- Users
   app.post("/api/users", function(req, res) {                   // Create
         db.User.create({
            firstname: req.body.firstname,
            lastname:  req.body.lastname,
            phone:     req.body.phone,
            email:     req.body.email,
            password:  bcrypt.hashSync(req.body.password, salt)
         }).then(function(dbRes) {
            res.json(dbRes);
         })
         .catch(
            function(err) {
               let errMsg = 
                  "Error: " +
                  err.errors[0].message  + " (" + 
                  err.errors[0].path + ") ";
               res.json(errMsg);
               //res.status(400).json(errMsg); OjO: reportar No. error y mensaje
            }
         );
   });

   app.post("/api/userli", function(req, res) {                // Read (one) - Log In
         db.User.findOne({
            where: { email: req.body.email }
         }).then(function(dbRes) {
            if (dbRes === null) {
               res.status(404).json({
                  firstname: "",
                  lastname:  "",
                  email:     ""
               });
            } else {
               if (bcrypt.compareSync(req.body.password, dbRes.dataValues.password)) {
                  res.json({
                     firstname: dbRes.dataValues.firstname,
                     lastname:  dbRes.dataValues.lastname,
                     email:     dbRes.dataValues.email
                  });
               } else {
                  res.status(401).json({
                     firstname: "",
                     lastname:  "",
                     email:     ""
                  });
               };
            };
         })
         .catch(function(err) {
            res.status(404).json({
               firstname: "",
               lastname:  "",
               email:     ""
            })
         });
   });

};
