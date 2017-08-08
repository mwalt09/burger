// Dependencies
// =========================================
// Requiring burger object containing orm calls //Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
