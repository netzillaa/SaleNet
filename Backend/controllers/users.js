let User = require("../models/User.model")
const mongoose = require("mongoose");
const Shop = require("../models/Shop.model");

const getAllUsers = async (req, res) => {
    let usersData = await User.find().populate('shop');
    if (usersData.length == 0) {
        console.log("there are no users in the database")
    }
    else {
        console.log("got user data");
    }
    res.status(200).json({ usersData });
}

const getSingleUser = async (req, res) => {
    try {
        const result = await User.findById(req.params.id).populate('shop');
        if (result.length == 0) {
            console.log("its empty")
        }
        else {
            console.log('paramid: ' + req.params.id);
            res.status(200).json({ result });
        }
    }
    catch (err) {
        res.status(404).json({ status: "Error getting user" })
        console.log("ERROR: " + err)
    }
};

const updateUser = async (req, res) => {
    // console.log('new name: ', req.params.id, req.body.productName, req.body.productPrice);
    let x = User.findOneAndUpdate({ _id: req.params.id }, {fullName: req.body.fullName, userName: req.body.userName, password: req.body.password, email: req.body.email, phoneNumber: req.body.phoneNumber}, function (err, data) {
        if (err) {
            console.log("error updating user accoount: ", err);
        }
        else {
            console.log(data);
            console.log('user updated in backend');
        }
    })
};

//user update shop info
const updateShop = async (req, res) => {
    try{
        const userInfo = await User.findById(req.params.id);
        const shopId = userInfo.shop;
        let x = Shop.findOneAndUpdate({ _id: shopId }, {shopName: req.body.shopName, shopAddress: req.body.shopAddress, businessLicense: req.body.businessLicense}, function (err, data) {
            console.log("Get shop name: ", x.shopName)
    })
    }
    catch(err){
        console.log("Error updating shop name: ", err);
    }
};

//admin update user shop name
const updateShopName = async (req, res) => {
    try{
        const userInfo = await User.findById(req.params.id);
        const shopId = userInfo.shop;
        let x = Shop.findOneAndUpdate({ _id: shopId }, {shopName: req.body.shopName}, function (err, data) {
            console.log("Get shop name: ", x.shopName)
    })
    }
    catch(err){
        console.log("Error updating shop name: ", err);
    }
};

const deleteUser = async (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log("couldnt delete" + err);
        }
        else {
            console.log("success, product deleted");
        }
    })
}

const getQR = async (req, res) => {
    try {
        const result = await User.findById(req.params.userID);
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

const addQR = async (req, res) => {
    var receivedProduct = req.body;

    try {
        await User.findOneAndUpdate({
            _id: req.params.userID
        }, {
            QRImage:  req.file.filename
        }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                console.log('updated in backend: ');
            }
        });

        console.log("added qr to data base");
    } catch (err) {
        console.log("error saving product to database: " + err);
    }
}

module.exports = { getAllUsers, getSingleUser, updateUser, updateShop, updateShopName, deleteUser, getQR, addQR }
