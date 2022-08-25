const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("propertyManagement");
        console.log("Successfully connected to MongoDB."); 
      }
      else {
        console.log("unable to connect to mongodb:", err)
      }
      return callback();
    });
  },
 
  getDb: function () {
    return _db;
  },
};