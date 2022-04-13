const express = require("express");
let router = express.Router();

const { getAllUsers } = require("../controllers/users");
router.route("/allUsers/:userId").get(getAllUsers);
module.exports = router;