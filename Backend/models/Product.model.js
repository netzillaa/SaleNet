const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name not detected"],
    },
    productPrice: {
        type: Number,
        required: [true, "product price not specified"],
    },
    productQuantity: {
        type: Number,
        required: [true, "item quantity not specified"],
    },
    productImage: {
        type: String,
        default: 'http://stompaudio.com.br/demo/wp-content/uploads/2014/04/placeholder3.png'
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

    { collection: "product" }
);
var product = mongoose.model("Product", productSchema)
module.exports = product;

