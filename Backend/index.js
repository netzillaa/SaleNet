require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const startDbConnection = require("./database/databaseConnection");
const User = require("./models/User.model");
const Shop = require("./models/Shop.model");
const productRouter = require("./routes/productRoute");
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../Frontend/public"));

//setting port
const port = process.env.PORT || 4000;
//DB URI
const URI = process.env.MONGO_URI;

const beginApp = async () => {
  try {
    //commenting since the URI in env file will be different for you guys
    // await dataBase(URI);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
      // try {
      //   mongoose.connect(URI).then(() => console.log("Database Connected"));
      // } catch (err) {
      //   console.log("cant connect to database" + err);
      // }
    });
  } catch (error) {
    console.log("something went wrong. Error details: ", error);
  }
};

app.get("/", (req, res) => {
  res.send("home page and the users will be shown here");
});
app.get("/test", (req, res) => {
  res.send("works")
})
app.use("/products", productRouter);
app.post("/register", async (req, res) => {
  var receiveData = req.body;
  console.log(receiveData);
  var shopInfo = req.body.shopName + "\n";
  req.body.shopAddress + "\n";
  req.body.businessLicense + "\n";
  Date.now() + "\n";
  req.body.email;
  console.log(shopInfo);
  try {
    await Shop.create({
      shopName: req.body.shopName,
      shopAddress: req.body.shopAddress,
      businessLicense: req.body.businessLicense,
      createdAt: Date.now(),
      ownerEmail: req.body.email,
    });
  } catch (err) {
    console.log("error saving shop to database");
  }
  try {
    await User.create({
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      createdAt: Date.now(),
      shopName: req.body.shopName,
    });
    console.log("added user to database");
  } catch (err) {
    console.log("something went wrong while saving  user to database");
  }
  res.json({ status: "user data received" });
});


beginApp();
