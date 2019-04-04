const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
//this was cat
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(data => {
    const hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name", "devoured"], [req.body.name, req.body.sleepy], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// add a delete route to the cats api
router.delete("/api/burgers/:id", (req, res) => {
  // call the cats model 
  // to delete a cat by id 
  // respond back with data
  burger.delete("id", req.params.id, (data) => {
    res.json(data);
  });
});

// Export routes for server.js to use.
module.exports = router;
