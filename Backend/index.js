require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const dataBase = require("./database/databaseConnection");
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
app.post("/register", (req, res) => {
  res.json({ status: "works" });
  var user = req.body;
  console.log(user);
});
app.get("/", (req, res) => {
  res.send("home page and the users will be shown here");
});
// app.get("/register", (req, res) => {
//   var registrationPath = path.join(__dirname + "/../Frontend/public");
//   console.log(path.join(__dirname + "/../Frontend/public/index.html"));
// });
beginApp();
