let Product = require("../models/Product.model");
const mongoose = require("mongoose");
const order = require("../models/Order.model");
const getAllProducts = async (req, res) => {
    let productsData = await Product.find();
    if (productsData.length == 0) {
        console.log("there are no items in the database")
    }
    else {
        console.log("got data");
    }
    res.status(200).json({ productsData });

};

const getOrder = async (req, res) => {
    const orderCart = await order.find().sort({ _id: -1 }).limit(1);

    res.status(200).json({ orderCart });

};

const createOrder = async (req, res) => {
    res.json({
        params: req.body
    })
    var receivedOrders = req.body.order;
    var orderTotalPrice = req.body.totalPrice;

    let orderName = [];

    try {
        for (let i = 0; i < receivedOrders.length; i++) {
            orderName[i] = JSON.stringify(receivedOrders[i].product.productName);
        }

        await order.create({
            items: orderName,
            totalPrice: orderTotalPrice,
        });
        console.log("added " + orderName + " to data base");
    } catch (err) {
        console.log("error saving product to database", err);
    }
}

// res.status(200).json({ product: "returning all products in a product" })
const addProduct = async (req, res) => {
    var receivedProduct = req.body;
    console.log("received product: ");
    var product = receivedProduct.productName + "\n";
    receivedProduct.productPrice + "\n";
    receivedProduct.productQuantity + "\n";
    Date.now() + "\n";
    receivedProduct.image + "\n";
    receivedProduct.category;


    console.log("name product: " + receivedProduct.productName);

    try {
        await Product.create({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productQuantity: req.body.productQuantity,
            addedAt: Date.now(),
            productImage: req.body.productImage,
            // productisAvailable: req.body.isAvailable,

        });
        console.log("added " + req.body.productName + " to data base");
    } catch (err) {
        console.log("error saving product to database: " + err);
    }
}
const findOne = async (req, res) => {
    try {
        const result = await Product.findById(req.params.id);
        if (result.length == 0) {
            console.log("its empty")
        }
        else {
            console.log('paramid: ' + req.params.id);
            res.status(200).json({ result });
        }
    }
    catch (err) {
        res.status(404).json({ status: "failed book is not found" })
        console.log("wowwwwwwwwwwwwwwww" + err)
    }
};

const updateProduct = async (req, res) => {
    console.log('new name: ', req.params.id, req.body.productName, req.body.productPrice);
    let x = Product.findOneAndUpdate({ _id: req.params.id }, { productName: req.body.productName, productPrice: req.body.productPrice, productQuantity: req.body.productQuantity, productCategory: req.body.productCategory }, function (err, data) {
        if (err) {
            console.log(err);
            console.log(x.productName);
        }
        else {
            console.log(data);
            console.log(x.productName);
            console.log('updated in backend: ');
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


module.exports = { getAllProducts, addProduct, findOne, updateProduct, deleteProduct, createOrder, getOrder }