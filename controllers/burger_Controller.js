// const express = require("express");

// const router = express.Router();


// // Import the model (cat.js) to use its database functions.
// //this was cat
// const burger = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", (req, res) => {
//   burger.selectAll(function(burgerData){
//    // res.json(burgerData);
//    console.log(burger_data)
//     res.render("index", {burger_data: burgerData})
    
//   })
// });

// // router.post("/burgers", (req, res) => {
// //   burger.insertOne(req.body.burger_name, function(result){
// //     console.log(result);
// //     res.redirect("/");
// //   })
// // });

// router.post('/burgers', function(req, res) {
//   burger.insertOne([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], function(data) {
//     res.redirect('/');
//   });
// });



// router.put("/burgers/:id", (req, res) => {
//   burger.updateOne(req.params.id, function(result){
//     console.log(result);
//     res.sendStatus(200);
//   })
// });

// // add a delete route to the cats api
// router.delete("/burgers/:id", (req, res) => {
//   // call the cats model 
//   // to delete a cat by id 
//   // respond back with data
//   burger.delete("id", req.params.id, (data) => {
//     res.json(data);
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;


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