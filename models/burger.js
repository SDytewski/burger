// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//this was cat
const burger = {
  all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  

  
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  // add a delete for the cats
  delete: function(col, val, cb) {
    // call the orm delete method 
    // with the "cats" table
    orm.delete("burgers", col, val, (data) => {
      cb(data);
    });
  }
};
// cat.delete("id", 6, (data) => {
//   console.log(data);
// });

//burger.all(data => console.log(data));

// Export the database functions for the controller (catsController.js).
//this was cat
module.exports = burger;
