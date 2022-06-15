require("dotenv").config();
const path = require("path");
var multer = require('multer')
//initalizing express server
const express = require("express");
// const request = require("request");
const cors = require("cors");
const app = express();
const startDbConnection = require("./database/databaseConnection");
const jwt = require("jsonwebtoken");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/AuthRoute");
const adminRouter = require("./routes/adminRoute");

// import authRouter from './routes/AuthRoute'; // a better wway to import
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../../Frontend/public"));

//setting port
const port = process.env.PORT || 4000;
//DB URI
const URI = process.env.MONGO_URI;

const beginApp = async() => {
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
//authentication
authentication_jwt = (req, res, next) => {
    //we get  the header that has token and its in the format of BEARER TOKEN
    const auth_header = req.headers['authentication-header'];
    // so we need to split and get the second half which is the token
    //we check first if ehader exist
    const token = auth_header && auth_header.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401);
    }
    //verification requires the token and the secret we used
    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) {
            console.log("bad token");
            return res.sendStatus(403);
        }
        req.user = user;
        res.sendStatus(200);
        next();
    })
}


app.get("/", (req, res) => {    
    res.send("home page and the users will be shown here");
});
//registration route
app.use("/auth", authRouter);

app.use("/admin", adminRouter);

app.get("/test", authentication_jwt, (req, res) => {
    console.log("welcome user");
})



//products route
app.use("/products", productRouter);
//user route
app.use("/users", userRouter);
//manage invoice route
app.use("/order", productRouter);

beginApp();