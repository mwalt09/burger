var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(tableInput, colName, colVal, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, colName, colVal], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(tableInput, objColVals, condition, callback) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableInput, objColVals, condition], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
