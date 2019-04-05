const express = require("express");

const PORT = process.env.PORT || 3000;

const burger = require("./models/burger")
//const orm = require("./config/orm");
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON, this takes in data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

//template for handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//displays content to the screen from index.handlebars.
app.get("/",  (req, res) =>{
  res.render("index");


});

// Import routes and give the server access to them.
const routes = require("./controllers/burger_Controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`App now listening at localhost:${PORT}`);
});
