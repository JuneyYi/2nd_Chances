var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Animal.findAll({}).then(function(dbAnimal) {
      res.json(dbAnimal);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Animal.create(req.body).then(function(dbAnimal) {
      res.json(dbAnimal);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Animal.destroy({ where: { id: req.params.id } }).then(function(dbAnimal) {
      res.json(dbAnimal);
    });
  });
};
