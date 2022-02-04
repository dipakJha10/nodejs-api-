const mongoose = require("mongoose");

const subscriptionsModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    email: true
  },
  message: {
    type: String,
    required: true,
  },
});

const subscriptions = mongoose.model("emails", subscriptionsModel);

module.exports = {
  subscriptions
};
