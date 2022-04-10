const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "you need to enter your full name"],
    },
    userName: {
      type: String,
      required: [true, "you need to enter a phnoe number"],
    },
    password: {
      type: String,
      required: [true, "you need to enter a password"],
    },
    email: {
      type: String,
      required: [true, "you need to enter an email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "you need to enter a phnoe number"],
    },
    shopName: {
      type: String,
      required: [true, "you Need a shop Name"],
      unique: true,
    },
    shopAddress: {
      type: String,
      required: [true, "you Need a shop Name"],
      unique: true,
    },
    businessLicense: {
      type: String,
      required: [true, "you need to enter your home address"],
    },
  },
  { collection: "netzilla-user" }
);
var User = mongoose.model("user", userSchema);
module.exports = User;
