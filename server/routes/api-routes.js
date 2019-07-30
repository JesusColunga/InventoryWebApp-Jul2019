// /server/routes/api-routes.js

var db = require("../models");
const apiKey = require("../config/apiKey");

// Routes
// =====================================================================
module.exports = function (app) {

   // ------------------------------------------- Products
   app.post("/api/products", function(req, res) {          // Create
      if (req.query.apikey === apiKey) {
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
      };
   });

   app.get("/api/products", function(req, res) {           // Read (all)
      if (req.query.apikey === apiKey) {
         db.Product.findAll()
            .then(function(dbRes) {
               res.json(dbRes);
            });
      };
   });

   app.get("/api/products/:id", function(req, res) {       // Read (one)
      if (req.query.apikey === apiKey) {
         db.Product.findOne({
            where: {id: req.params.id}
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.put("/api/products/:id", function(req, res) {       // Update
      if (req.query.apikey === apiKey) {
         db.Product.update(req.body,{
            where: {id: req.body.id}
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.delete("/api/products/:id", function(req, res) {    // Delete
      if (req.query.apikey === apiKey) {
         db.Product.destroy({
            where: {id: req.params.id}
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   // ------------------------------------------- Associates
   app.post("/api/associates/:type", function(req, res) {          // Create
      if (req.query.apikey === apiKey) {
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
            });
         };
      };
   });

   app.get("/api/associates/:type", function(req, res) {           // Read (all)
      if (req.query.apikey === apiKey) {
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.findAll({
               where: {associate_type: req.params.type}
            })
               .then(function(dbRes) {
                  res.json(dbRes);
               });
         };
      };
   });

   app.get("/api/associates/:type/:id", function(req, res) {       // Read (one)
      if (req.query.apikey === apiKey) {
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
      };
   });

   app.put("/api/associates/:type/:id", function(req, res) {       // Update
      if (req.query.apikey === apiKey) {
         if ( ["P", "C"].includes(req.params.type) ) {
            db.Associate.update(req.body,{
               where: {
                  id: req.body.id,
                  associate_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
      };
   });

   app.delete("/api/associates/:type/:id", function(req, res) {    // Delete
      if (req.query.apikey === apiKey) {
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
      };
   });

   // ------------------------------------------- Exchange
   app.post("/api/exchange/:type", function(req, res) {          // Create
      if (req.query.apikey === apiKey) {
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
      };
   });

   app.get("/api/exchange/:type", function(req, res) {           // Read (all)
      if (req.query.apikey === apiKey) {
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.findAll({
               where: {document_type: req.params.type}
            })
               .then(function(dbRes) {
                  res.json(dbRes);
               });
         };
      };
   });

   app.get("/api/exchange/:type/:id", function(req, res) {       // Read (one)
      if (req.query.apikey === apiKey) {
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
      };
   });

   app.put("/api/exchange/:type/:id", function(req, res) {       // Update
      if (req.query.apikey === apiKey) {
         if ( ["P", "S", "K"].includes(req.params.type) ) {
            db.Exchange_Op_M.update(req.body,{
               where: {
                  id: req.body.id,
                  document_type: req.params.type
               }
            }).then(function(dbRes) {
               res.json(dbRes);
            });
         };
      };
   });

   app.delete("/api/exchange/:type/:id", function(req, res) {    // Delete
      if (req.query.apikey === apiKey) {
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
      };
   });

/*
   // ------------------------------------------- Purchases
   app.post("/api/purchases", function(req, res) {          // Create
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.create({
            document_type: "P",
            document_id:   req.body.data.document_id,
            date:          req.body.data.date,
            associate_id:  req.body.data.associate_id,
            internal_ref:  req.body.data.internal_ref,
            external_ref:  req.body.data.external_ref,
            currency:      req.body.data.currency,
            exchange_rate: req.body.data.exchange_rate,
            notes:         req.body.data.notes
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.get("/api/purchases", function(req, res) {           // Read (all)
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.findAll({
            where: {
               document_type: "P"
            }
         })
            .then(function(dbRes) {
               res.json(dbRes);
            });
      };
   });

   app.get("/api/purchases/:id", function(req, res) {       // Read (one)
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.findOne({
            where: {
               id: req.params.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.put("/api/purchases", function(req, res) {           // Update
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.update(req.body,{
            where: {
               id: req.body.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.delete("/api/purchases/:id", function(req, res) {    // Delete
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.destroy({
            where: {
               id: req.params.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   // ------------------------------------------- Sales
   app.post("/api/purchases", function(req, res) {          // Create
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.create({
            document_type: "P",
            document_id:   req.body.data.document_id,
            date:          req.body.data.date,
            associate_id:  req.body.data.associate_id,
            internal_ref:  req.body.data.internal_ref,
            external_ref:  req.body.data.external_ref,
            currency:      req.body.data.currency,
            exchange_rate: req.body.data.exchange_rate,
            notes:         req.body.data.notes
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.get("/api/purchases", function(req, res) {           // Read (all)
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.findAll({
            where: {
               document_type: "P"
            }
         })
            .then(function(dbRes) {
               res.json(dbRes);
            });
      };
   });

   app.get("/api/purchases/:id", function(req, res) {       // Read (one)
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.findOne({
            where: {
               id: req.params.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.put("/api/purchases", function(req, res) {           // Update
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.update(req.body,{
            where: {
               id: req.body.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });

   app.delete("/api/purchases/:id", function(req, res) {    // Delete
      if (req.query.apikey === apiKey) {
         db.Exchange_Op_M.destroy({
            where: {
               id: req.params.id,
               document_type: "P"
            }
         }).then(function(dbRes) {
            res.json(dbRes);
         });
      };
   });
*/
   // -------------------------------------------
   // -------------------------------------------
   // -------------------------------------------

	// GET route for getting all of the posts
	app.get("/api/posts/", function (req, res) {
		db.Post.findAll().then(function (dbPost) {
			res.json(dbPost);
		});
	});

	// Get route for returning posts of a specific category
	app.get("/api/posts/category/:category", function (req, res) {
		db.Post.findAll({
			where: {
				category: req.params.category
			}
		}).then(function (dbPost) {
			res.json(dbPost);
		});
	});

	// Get route for retrieving a single post
	app.get("/api/posts/:id", function (req, res) {
		db.Post.findOne({
			where: {
				id: req.params.id
			}
		}).then(function (dbPost) {
			res.json(dbPost);
		});
	});

	// POST route for saving a new post
	app.post("/api/posts", function (req, res) {
		console.log(req.body);
		db.Post.create({
			title: req.body.title,
			body: req.body.body,
			category: req.body.category
		}).then(function (dbPost) {
			res.json(dbPost);
		});
	});

	// DELETE route for deleting posts
	app.delete("/api/posts/:id", function (req, res) {
		db.Post.destroy({
			where: {
				id: req.params.id
			}
		}).then(function (dbPost) {
			res.json(dbPost);
		});
	});

	// PUT route for updating posts
	app.put("/api/posts", function (req, res) {
		db.Post.update(req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function (dbPost) {
				res.json(dbPost);
			});
	});
};
