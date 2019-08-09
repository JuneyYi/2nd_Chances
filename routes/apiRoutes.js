var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/pet", function(req, res) {
    // db.Pet.findAll({}).then(function(dbPet) {
    //   res.json(dbPet);
    // });
    res.send("awewea");
  }); 

  //Create a new example
  app.post("/register", function(req, res) {
    // db.secondChances.create(req.body).then(function(dbPet) {
    //   res.json(dbPet);
    // });
    console.log("hello");
  });

  //Delete an example by id
  app.delete("/api/pet/:id", function(req, res) {
    db.secondChances.destroy({ where: { id: req.params.id } }).then(function(dbPet) {
      res.json(dbPet);
    });
  });
};
