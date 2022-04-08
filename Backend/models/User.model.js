const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
      unique: true,
    },
    homeAddress: {
      type: String,
      required: [true, "you need to enter your home address"],
    },
    password: {
      type: String,
      required: [true, "you need to enter a password"],
    },
    shopName: {
      type: String,
      required: [true, "you Need a shop Name"],
      unique: true,
    },
  },
  { collection: "netzilla-user" }
);

module.exports = mongoose.model("user", userSchema);
