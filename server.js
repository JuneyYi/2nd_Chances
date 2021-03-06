// require("dotenv").config();
// var express = require("express");
// var exphbs = require("express-handlebars");

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// // Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// module.exports = app;


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'));

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});