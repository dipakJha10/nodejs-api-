var mongoose = require("mongoose");

var mongoDB =
  "mongodb+srv://Deepak:Deepak1234567890@nodejsprojects.qcxi8.mongodb.net/subscriptions?retryWrites=false&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connected to Subscriptions......!!!");
});

module.exports = db;
