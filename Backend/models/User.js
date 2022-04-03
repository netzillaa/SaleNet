const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "you need to enter your full name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "you need to enter a phnoe number"],
  },
  email: {
    type: String,
    required: [true, "you need to enter an email"],
  },
  homeAddress: {
    type: String,
    required: [true, "you need to enter your home address"],
  },
  password: {
    type: String,
    required: [true, "you need to enter a password"],
  },
});

module.exports = mongoose.model("user", userSchema);
