let User = require("../models/User.model");
const mongoose = require("mongoose");

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log(user+"asdasdasdasd11111111asdasdasdasdasdasdas");
    res.json({user})
}
const getAllUsers = async (req, res) => {
    res.status(200).json({ Users: "A list of users" })
}

module.exports = { getAllUsers, getSingleUser }
