const User = require("../models/User.model");
const Shop = require("../models/Shop.model");
const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const {  sendMail } = require("./emailSender");

let code = (Math.random() + 1).toString(36).substring(7);

const emailVerify = async (req, res) => {
    try {
            sendMail(req.body.email, code)
            res.json({"verifyCode": code})
    }
    catch (err) {
        console.log("error information: " + err);
    }
}

const registerUser = async (req, res) => {
    var receiveData = req.body;
    console.log(receiveData);
    var shopInfo = req.body.shopName + "\n";
    req.body.shopAddress + "\n";
    req.body.businessLicense + "\n";
    Date.now() + "\n";
    req.body.email;
    console.log(shopInfo);

    try {
        const shopExist = await Shop.findOne({ shopName: req.body.shopName });
        if (shopExist) {
            console.log("shop exists already");
        }
        await Shop.create({

            shopName: req.body.shopName,
            shopAddress: req.body.shopAddress,
            businessLicense: req.body.businessLicense,
            createdAt: Date.now(),
            ownerEmail: req.body.email,
        });

        console.log("added " + req.body.shopName + " to data base");
    } catch (err) {
        console.log("error saving shop to database" + err);
    }
    try {
        const ownedShop = await Shop.findOne({ shopName: req.body.shopName })
        console.log("the owned shop is: " + ownedShop);
        await User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            createdAt: Date.now(),
            shop: ownedShop,
        });
        console.log("added user to database");
    } catch (err) {
        console.log("cant connect to database or user already exist with the email.Error infor: " + err);
    }
    console.log("user data received");
}
const loginUser = async (req, res) => {
    try {
        var loginData = req.body;
        console.log(loginData);
        var user_email = req.body.email + "\n";
        var user_password = req.body.password + "\n";
        //checking passed values
        console.log("sent:::" + user_email + " and " + user_password);
        //searching database if a user exist with the passed username and password
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        // console.log("user document info " + user.shop[0].businessLicense);

        console.log("db works");

        if (user) {
            //creating a token when user is found
            console.log("signed for: " + user._id);
            const token = jwt.sign({ id: user._id, username: user.userName, shop: user.shop }, process.env.TOKEN);
            res.header('authentication-token', token).send(token);
            // var ownedshopUrl = Shop.find({ businessLicense: user.businessLicense })
            res.json({ status: "User is found and authentication token sent" + user._id });
        }
        else {
            res.json({ status: "works but no user is found" });
        }
    }
    catch (err) {
        console.log("error information: " + err);
    }
}

module.exports = { registerUser, loginUser, emailVerify }