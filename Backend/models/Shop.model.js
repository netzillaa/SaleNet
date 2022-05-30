const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shopSchema = mongoose.Schema(
  {
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
      unique: true
    },
    createdAt: {
      type: Date,
    },
    ownerEmail: {
      type: String,
      required: [true, "you need to enter an email"],
      unique: true,
    },
  },
  { collection: "shop" }
);
var Shop = mongoose.model("shop", shopSchema);
module.exports = Shop;
