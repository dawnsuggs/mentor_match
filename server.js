const express = require("express");
// I added bodyParser to template
const bodyParser = require ("body-parser");
const path = require("path");
// I added var router 
var router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();

//Outside now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku) removed: process.env.NODE_ENV === "production" from if statement
if (true) {
  app.use(express.static("build"));
}

// Send every request to the React app

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



