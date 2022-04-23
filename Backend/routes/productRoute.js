const express = require("express");
let router = express.Router();

const { getAllProducts } = require("../controllers/products")
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
//getting product type from a certain shop
router.get("/:shopId/:productType", (req, res) => {
    res.send("return a product with specific id" + req.params.productId + "and the shop it belongs to is " + req.params.shopId);
})
module.exports = router;