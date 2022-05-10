const mongoose = require("mongoose")
const Shop = require("./Shop.model").schema;
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    items: [{
        type: String,
        required: [true, "Order items not detected"],
        }
    ],
    totalPrice: {
        type: Number,
        required: [true, "Order total price not specified"],
    }, 
    shop:
        { type: Schema.Types.ObjectId, ref: 'shop' },
    createdAt: {
        type: Date,
    },
},

    { collection: "order" }
);
var order = mongoose.model("Order", orderSchema)
module.exports = order;

