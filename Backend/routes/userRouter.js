const express = require("express");
let router = express.Router();

const { getAllUsers, getQR, addQR } = require("../controllers/users");
router.route("/allUsers/:userId").get(getAllUsers);

// router.route("/getQR/:id").get(getQR);
// router.route("/addQR").post(upload.single('QRImage'), addQR());

module.exports = router;