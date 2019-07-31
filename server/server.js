// /server/server.js

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// =============================================================
db.sequelize.sync({ force: true }).then(function() {       // force: true (drops db)
  app.listen(PORT, () => {
   console.log("API Server listening on: http://localhost:" + PORT);
  });
});
