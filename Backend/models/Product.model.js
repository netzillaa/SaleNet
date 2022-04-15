const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name not detected"],
        unique: true,
    },
    productPrice: {
        type: Double,
        required: [true, "product price not specified"],
    },
    prodcutQuantity: {
        type: Integer,
        required: [true, "item quantity not specified"],
    },
    productImage: {
        type: Buffer,
    },
    productisAvailable: {
        type: Boolean,
    },
    productCategory: {
        enum: ['FOOD', 'DRINK', 'OTHER'],
        default: 'OTHER',
    },
},
    { collection: "netzillaproducttest" }
);
var product = mongoose.model("Product", productSchema)
module.exports(product);

