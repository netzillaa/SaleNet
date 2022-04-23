const express = require("express");
let router = express.Router();

const { getAllUsers, getSingleUser } = require("../controllers/users");
router.route("/allUsers/:userId").get(getAllUsers);
router.route("/single").get(getSingleUser);
module.exports = router;