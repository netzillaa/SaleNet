const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name not detected"],
        unique: true,
    },
    productPrice: {
        type: Number,
        required: [true, "product price not specified"],
    },
    prodcutQuantity: {
        type: Number,
        required: [true, "item quantity not specified"],
    },
    productImage: {
        type: Buffer,
    },
    productisAvailable: {
        type: Boolean,
    },
    productCategory: {
        type: String,
        enum: ['FOOD', 'DRINK', 'OTHER'],
        default: 'OTHER'
    },
},
    //collection is missing a t will add it later
    { collection: "netzillaproducttest" }
);
var product = mongoose.model("Product", productSchema)
module.exports = product;

