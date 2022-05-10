const express = require("express");
let router = express.Router();
//const router = require("./productRoute");
const { registerUser, loginUser} = require("../controllers/Auth");
router.route("/register").post( registerUser);

router.route("/login").post(loginUser);

module.exports = router