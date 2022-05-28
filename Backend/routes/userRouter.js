const express = require("express");
let router = express.Router();

const { getAllUsers, getSingleUser, updateUser, deleteUser, getQR, addQR, updateShopName, updateShop } = require("../controllers/users");
router.route("/allUsers").get(getAllUsers);
router.route("/editUser/:id").get(getSingleUser);
router.route("/update/:id").post(updateUser);
router.route("/updateShopName/:id").post(updateShopName);
router.route("/updateShop/:id").post(updateShop);
router.route("/delete/:id").delete(deleteUser);
module.exports = router;