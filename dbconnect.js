const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const DbConnection = function() {
  const url = "mongodb://localhost:27017/blog";

  var connect = mongoose.connect(url, { useMongoClient: true });

  connect.then(
    db => {
      console.log(" connected successfully to the server");
    },
    error => {
      console.log(error);
    }
  );
};

module.exports = DbConnection;
