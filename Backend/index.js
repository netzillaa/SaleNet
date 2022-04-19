require("dotenv").config();
const path = require("path");
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const startDbConnection = require("./database/databaseConnection");

const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/AuthRoute");
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
      try {
        mongoose.connect(URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }).then(() => console.log("Database Connected"));
      } catch (err) {
        console.log("cant connect to database" + err);
      }
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
//products route
app.use("/products", productRouter);
//user route
app.use("/users", userRouter);
//registration route
app.use("/auth", authRouter);

beginApp();
