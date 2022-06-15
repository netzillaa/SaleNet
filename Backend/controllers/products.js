let Product = require("../models/Product.model");
let pdfGenerator = require('./pdfGenerator');
const mongoose = require("mongoose");
const order = require("../models/Order.model");
const User = require("../models/User.model");
const Shop = require("../models/Shop.model");

const getAllProducts = async (req, res) => {
    let shopProductsID = req.params.id;
    let productsData = await Product.find({owner: req.params.id});
    if (productsData.length == 0) {
        console.log("there are no items in the database")
    }
    else {
        console.log("got data");
    }
    res.status(200).json({ productsData });

};

const getAllOrders = async (req, res) => {
    console.log("what we got: ", req.param("id"));
    // const order = await Order.find(req.params.id);
    // console.log("user", user)
    // let shop = await shop.find({_id: req.params.id});
    // const shopId = user.Shop;
    let orderData = await order.find({shop: req.params.id});
    // console.log ("orders", user.Shop)
    if (orderData.length == 0) {
        console.log("there are no items in the database")
    }
    else {
        console.log("got data");
    }
    res.status(200).json({ orderData });

};

const getOrder = async (req, res) => {
    const orderCart = await order.find().sort({ _id: -1 }).limit(1).populate('shop');
    await pdfGenerator(orderCart);
    res.status(200).json({ orderCart });

};

const createOrder = async (req, res) => {
    res.json({
        params: req.body
    })

    var receivedOrders = req.body.carts;

    var orderTotalPrice = req.body.newTotal;
    var orderShopInfo = req.body.shopData;
    let orderName = [];
    let orderNamePrice = [];
    let orderQuantity = [];

    try {
        for (let i = 0; i < receivedOrders.length; i++) {
            orderName[i] = JSON.stringify(receivedOrders[i].product.productName).slice(1, -1);
            orderNamePrice[i] = receivedOrders[i].product.productPrice;
            orderQuantity[i] = receivedOrders[i].quantity;
        }

        await order.create({
            items: orderName,
            itemPrice: orderNamePrice,
            itemQuantity: orderQuantity,
            totalPrice: orderTotalPrice,
            shop: orderShopInfo,
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

    let allProducts = await Product.find();
    let exict = false;
    let randomID;

    for (let i = 0; i < (allProducts.length + 1); i++) {
        randomID = Math.floor((Math.random() * 9999999999) + 1)
        for (let i = 0; i < allProducts.length; i++) {
            if (randomID == allProducts.productID){
                exict = true;
                break;
            }    
        }
        if (!exict) {
            break;
        }
    }

    console.log("name product: " + receivedProduct.productName);

    try {
        await Product.create({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productQuantity: req.body.productQuantity,
            addedAt: Date.now(),
            // productImage: req.body.productImage,
            productImage: req.file.filename,
            productID: randomID,
            owner: req.body.owner,
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
    let x = Product.findOneAndUpdate({
        _id: req.params.id
    }, {
        productName: req.body.productName, productPrice: req.body.productPrice, productQuantity: req.body.productQuantity, productCategory: req.body.productCategory
    }, function (err, data) {
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
    console.log("kalam"+req.params.id);
    Product.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log("couldnt delete" + err);
        }
        else {
            console.log("success, product deleted");
        }
    })
}

const deleteOrder = async (req, res) => {
    console.log("kalam"+req.params.id);
    order.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log("couldnt delete" + err);
        }
        else {
            console.log("success, order deleted");
        }
    })
}


module.exports = { getAllProducts, addProduct, findOne, updateProduct, deleteProduct, createOrder, getOrder, getAllOrders, deleteOrder }