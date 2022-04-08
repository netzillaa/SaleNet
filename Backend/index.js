require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const startDbConnection = require("./database/databaseConnection");
const userModel = require("./models/User.model");
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../Frontend/public"));

//setting port
const port = process.env.PORT;
//DB URI
const URI = process.env.MONGO_URI;

const beginApp = async () => {
  try {
    //commenting since the URI in env file will be different for you guys
    // await dataBase(URI);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log("something went wrong. Error details: ", error);
  }
};
mongoose.connect(URI).then(() => console.log("Database Connected"));
app.post("/register", async (req, res) => {
  var user1 = req.body;
  console.log(user1);
  try {
    const user = await userModel.create({
      fullName: req.body.fullName,
      phoneNumber: 4412452,
      email: req.body.email,
      homeAddress: "tata",
      password: req.body.password,
      shopName: "wow",
    });
    console.log("added user");
  } catch (err) {
    console.log("something went wrong");
  }
  res.json({ status: "data received from front end" });
});

app.get("/", (req, res) => {
  res.send("home page and the users will be shown here");
});
beginApp();
