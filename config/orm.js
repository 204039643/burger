var connection = require("../config/connection.js");

//MySQL queries to define ORM

const orm = {
// * `selectAll()`
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}

// * `insertOne()`



// * `updateOne()`

module.exports = orm;