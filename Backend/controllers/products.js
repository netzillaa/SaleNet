let Product = require("../models/Product.model");
const mongoose = require("mongoose");
const getAllProducts = async (req, res) => {
    let data = await Product.find();
    if (data.length == 0) {
        console.log("there are no items in the database")
    }
    else {
        console.log(data);
        res.status(200).json({data});
    }
    

};
// res.status(200).json({ product: "returning all products in a product" })
const addProduct = async (req, res) => {
    var receivedProduct = req.body;
    console.log("received product: " + receivedProduct);
    var product = req.body.productName + "\n";
    req.body.productPrice + "\n";
    req.body.productQuantity + "\n";
    Date.now() + "\n";
    req.body.image + "\n";
    req.body.isAvailable + "\n";
    req.body.category;

    try {

        await product.create({

            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productQuantity: req.body.productQuantity,
            addedAt: Date.now(),
            productImage: req.body.image,
            productisAvailable: req.body.isAvailable,

        });
        console.log("added " + req.body.productName + " to data base");
    } catch (err) {
        console.log("error saving product to database");
    }
}


module.exports = { getAllProducts, addProduct }