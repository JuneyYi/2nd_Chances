'use strict';
module.exports = function(app) {
  var petRegister = require('../controllers/todoListController');

  // petregister routes
  app.route('/Register')
    .get(petRegister.list_all_tasks)
    .post(petRegister.create_a_task);
   
   app.route('/register/:registerId')
    .get(petRegister.read_a_task)
    .put(petRegister.update_a_task)
    .delete(petRegister.delete_a_task);
    };