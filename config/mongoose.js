const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://0.0.0.0:27017/url_short");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection problem"));
db.on("open", function () {
   console.log("connected to db successfully");
});

module.exports = db;