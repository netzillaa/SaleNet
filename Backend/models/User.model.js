const mongoose = require("mongoose");
const Shop = require("./Shop.model").schema;
const Schema = mongoose.Schema;
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
      { type: Schema.Types.ObjectId, ref: 'shop' },
    createdAt: {
      type: Date,
    },
  },
  { collection: "user" }
);
var User = mongoose.model("user", userSchema);
module.exports = User;
