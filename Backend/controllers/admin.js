const Admin = require("../models/Admin.model");
const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');

const loginAdmin = async (req, res) => {
    try {
        var loginData = req.body;
        console.log(loginData);
        var admin_email = req.body.email + "\n";
        var admin_password = req.body.password + "\n";
        
        const admin = await Admin.findOne({ email: req.body.email, password: req.body.password });

        console.log("db works");
        console.log("signed for: " + admin);

        if (admin) {
            //creating a token when user is found
            console.log("signed for: " + admin._id);
            const token = jwt.sign({ id: admin._id, username: admin.adminName }, process.env.TOKEN);
            res.header('authentication-token', token).send(token);
            
            res.json({ status: "Admin in" + admin });
        }
    }
    catch (err) {
        console.log("error information: " + err);
    }
}

module.exports = { loginAdmin }