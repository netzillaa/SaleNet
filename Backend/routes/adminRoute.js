const express = require("express");
let router = express.Router();
//const router = require("./productRoute");
const { loginAdmin } = require("../controllers/admin");

router.route("/loginAdmin").post(loginAdmin);

module.exports = router