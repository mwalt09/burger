// Dependencies
// =========================================
// Requiring burger object containing orm calls //Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  // console.log("Result: " + req.body.burger_name);
  burgers.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burgers.updateOne({
    devoured: req.body.devoured
  }, req.params.id, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
