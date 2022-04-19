const User = require("../models/User.model");
const Shop = require("../models/Shop.model");
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
        await User.create({
            fullName: req.body.fullName,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            createdAt: Date.now(),
            shopName: req.body.shopName,
        });
        console.log("added user to database");
    } catch (err) {
        console.log("cant connect to database or user already exist with the email.Error infor: " + err);
    }
    res.json({ status: "user data received" });
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
        console.log(user);
        console.log("db works");

        if (user) {
            res.json({ status: "works and user is found" + user });
        }
        else {
            res.json({ status: "works but no user is found" });
        }
    }
    catch (err) {
        console.log("error information: " + err);
    }
}

module.exports = { registerUser, loginUser }