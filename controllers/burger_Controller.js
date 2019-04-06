
const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
const router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
        };
       // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Route to create Burger
router.post("/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], result => {
        // Send back the results
       // res.json(true);
        res.redirect("/");
    });
});
//Route to update Burger

router.put("/burgers/:id", (req, res) => {
    console.log("controllers")
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            devoured: req.body.devoured
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
//delete route
router.delete("/burgers/:id", (req, res) => {
   burger.delete(req.params.id, function(data){
       res.send(data);
   })
});

// Export routes for server.js to use.
module.exports = router;