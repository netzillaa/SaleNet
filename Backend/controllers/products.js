let Product = require("../models/Product.model");
const mongoose = require("mongoose");
const getAllProducts = async (req, res) => {
    let productsData = await Product.find();
    if (productsData.length == 0) {
        console.log("there are no items in the database")
    }
    else {
        console.log("got data");
    }
    res.status(200).json({productsData});

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
const findOne = async (req, res) => {
    try {
        const result = await Product.findById(req.params.id);
        res.json({ data: result });
    }
    catch (err) {
        res.status(404).json({ status: "failed book is not found" })
        console.log("wowwwwwwwwwwwwwwww" + err)
    }
};

const updateProduct = async (req, res) => {

    Product.findOneAndUpdate({ id: req.body.id }, { productName: req.body.newName, productPrice: req.body.newPrice }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    })
};
const deleteProduct = async (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log("couldnt delete" + err);
        }
        else {
            console.log("success, product deleted");
        }
    })
}


module.exports = { getAllProducts, addProduct, findOne, updateProduct, deleteProduct }