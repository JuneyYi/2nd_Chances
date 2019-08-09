// var db = require("../models");
var path = require('path');

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
  });

  // // Load example page and pass in an example by id
  // app.get("/browse", function(req, res) {
  //   res.sendFIle(path.join(_dirname + '../public/browse.html'))
  // });

  // app.get("/browse/:id", function(req, res) {
  //   res.sendFIle(path.join(_dirname + '../public/view.html'))
  // });

  app.get("/register", function (req, res) {


    res.sendFile(path.join(__dirname + '/../public/inputForm.html'))
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
