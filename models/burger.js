// Dependencies
// ============================================================================
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },

  insertOne: function(colName, colVal, callback) {
    orm.create("burgers", function(res) {
      callback(res);
    });
  },

  updateOne: function(colName, colVal, colName2, colVal2, callback) {
    orm.update("burgers", function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
