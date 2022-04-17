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
        console.log("something went wrong while saving  user to database" + err);
    }
    res.json({ status: "user data received" });
}
module.exports = { registerUser }