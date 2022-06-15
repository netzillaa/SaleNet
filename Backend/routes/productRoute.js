const express = require("express");
var multer = require('multer')
let router = express.Router();
const path = require("path");
const { getAllProducts, findOne, updateProduct, deleteProduct, addProduct, createOrder, getOrder, getAllOrders, deleteOrder } = require("../controllers/products")
//a middleware to log every request we handle including url and date
router.use((req, res, next) => {
    console.log(req.url, "@", Date.now());
    next();
})
//getting or  all products from a certain shop
router.route("/allProducts/:id").get(getAllProducts);
router.route("/getOrder").get(getOrder);
//getting or deleting a certain product from a certain shop
router.route("/:shopId/:productType/:productId").get((req, res) => {
    res.send("put request for product received " + req.params.productType + " " + req.params.productId);
}).delete((req, res) => {
    res.send("deleted something");
});
//getting a single product
// router.route("/find/:id").get(findOne);
router.route("/editProduct/:id").get(findOne);
router.route("/update/:id").post(updateProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/removeOrder/:id").delete(deleteOrder);
router.route("/createOrder").post(createOrder);

//get all order
router.route("/allOrders/:id").get(getAllOrders);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Frontend/public/images/productImages/')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage: storage })
// app.post("/add", upload.single('productImage'), (req, res) => {
//     console.log("image and form uploaded" + req + " " + req.body.productName);
// })  

router.route("/add").post(upload.single('productImage'), addProduct);






module.exports = router;