// Dependencies
// ============================================================================
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  insertOne: function(colName, colVal, callback) {
    orm.insertOne("burgers", colName, colVal, function(res) {
      callback(res);
    });
  },

  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }

  // updateOne: function(colName, colVal, condition, callback) {
  //   orm.updateOne("burgers", colName, colVal, condition, function(res) {
  //     callback(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
