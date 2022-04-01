require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("../../Frontend/public"));

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/register", (req, res) => {
  var registrationPath = path.join(__dirname + "/../Frontend/public");
  console.log(path.join(__dirname + "/../Frontend/public/index.html"));
  res.sendFile(path.join(__dirname + "/../Frontend/public/index.html"));
});

//setting port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
