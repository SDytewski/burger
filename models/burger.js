// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

//this was cat
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", (res) => {
      console.log("res = " + res);
    
      cb(res);

       
      
    });
  },

  

  
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  // updateOne: function(objColVals, condition, cb) {
  //   orm.updateOne("burgers", objColVals, condition, (res) => {
  //     cb(res);
  //   });
  // },

  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
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


// burger.all(data => console.log(data));
//burger.insertOne(myBurger, data => console.log(data));


// Export the database functions for the controller (catsController.js).
//this was cat
module.exports = burger;
