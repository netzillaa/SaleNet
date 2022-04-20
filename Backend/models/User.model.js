const mongoose = require("mongoose");
const Shop = require("./Shop.model").schema;
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
    // user owns a shops
    shop:
      [Shop],
    createdAt: {
      type: Date,
    },
  },
  { collection: "user" }
);
var User = mongoose.model("user", userSchema);
module.exports = User;
