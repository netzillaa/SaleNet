const express = require("express");
let router = express.Router();
//const router = require("./productRoute");
const { registerUser } = require("../controllers/Registration");
router.route("/newUser").post(registerUser);

module.exports = router