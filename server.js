// /server/server.js

var express = require("express");
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 3001;
var db = require("./models");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./client/build"));

//app.use(express.static("client/build"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// =============================================================
db.sequelize.sync({ force: false }).then(function() {       // force: true (drops db)
  app.listen(PORT, () => {
   console.log("API Server listening on: http://localhost:" + PORT);
  });
});
