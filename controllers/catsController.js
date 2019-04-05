const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
//this was cat
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function(burgerData){
    res.render("index", {burger_data: burgerData})
  })
});

router.post("/burgers", (req, res) => {
  burger.insertOne(req.body.burger_name, function(result){
    console.log(result);
    res.redirect("/");
  })
});

router.put("/burgers/:id", (req, res) => {
  burger.update(req.params.id, function(result){
    console.log(result);
    res.sendStatus(200);
  })
});

// add a delete route to the cats api
router.delete("/burgers/:id", (req, res) => {
  // call the cats model 
  // to delete a cat by id 
  // respond back with data
  burger.delete("id", req.params.id, (data) => {
    res.json(data);
  });
});

// Export routes for server.js to use.
module.exports = router;
