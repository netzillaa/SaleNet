const express = require("express");
let router = express.Router();

const { getAllProducts, findOne, updateProduct, deleteProduct } = require("../controllers/products")
//a middleware to log every request we handle including url and date
router.use((req, res, next) => {
    console.log(req.url, "@", Date.now());
    next();
})
//getting or  all products from a certain shop
router.route("/allProducts").get(getAllProducts);
//getting or deleting a certain product from a certain shop
router.route("/:shopId/:productType/:productId").get((req, res) => {
    res.send("put request for product received " + req.params.productType + " " + req.params.productId);
}).delete((req, res) => {
    res.send("deleted something");
});
//getting a single product
router.route("/find/:id").get(findOne);
router.route("/update/:id").post(updateProduct);
router.route("/delete/:id").delete(deleteProduct);



module.exports = router;