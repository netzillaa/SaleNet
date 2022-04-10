require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const startDbConnection = require("./database/databaseConnection");
const User = require("./models/User.model");
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../Frontend/public"));

//setting port
const port = process.env.PORT || 4000;
//DB URI
// const URI = process.env.MONGO_URI;

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
// mongoose.connect(URI).then(() => console.log("Database Connected"));

app.post("/register", async (req, res) => {
  var user1 = req.body;
  console.log(user1);
  try {
    await User.create(req.body);
    console.log("added user to database");
  } catch (err) {
    console.log("something went wrong while saving user to database");
  }
  res.json({ status: "user data received" });
});

app.get("/", (req, res) => {
  res.send("home page and the users will be shown here");
});
beginApp();
