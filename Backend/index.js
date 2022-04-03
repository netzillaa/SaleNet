require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
const cors = require("cors");
app.use(cors());
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("../../Frontend/public"));
//setting port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`);

  const beginApp = async () => {
    try {
    } catch (error) {
      console.log("something went wrong. Error details: ", error);
    }
  };
  app.get("/", (req, res) => {
    res.send("home page");
  });
  app.get("/register", (req, res) => {
    var registrationPath = path.join(__dirname + "/../Frontend/public");
    console.log(path.join(__dirname + "/../Frontend/public/index.html"));
    res.sendFile(path.join(__dirname + "/../Frontend/public/index.html"));
  });
});
