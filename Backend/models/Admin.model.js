const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
      required: [true, "you need to enter a name"],
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
  },
  { collection: "admin" }
);
var Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
