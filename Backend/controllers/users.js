const User = require("../models/User.model");

const getSingleUser = async (req, res) => {
    res.status(200).json({ User: "Single user info" })
}
const getAllUsers = async (req, res) => {
    res.status(200).json({ Users: "A list of users" })
}


const getQR = async (req, res) => {
    try {
        const result = await User.findById(req.params.userID);
        if (result.length == 0) {
            console.log("its empty")
        }
        else {
            console.log('paramid: ' + req.params.id);
            res.status(200).json({ result });
        }
    }
    catch (err) {
        res.status(404).json({ status: "failed book is not found" })
        console.log("wowwwwwwwwwwwwwwww" + err)
    }

};

const addQR = async (req, res) => {
    var receivedProduct = req.body;

    try {
        await User.findOneAndUpdate({
            _id: req.params.userID
        }, {
            QRImage:  req.file.filename
        }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                console.log('updated in backend: ');
            }
        });

        console.log("added qr to data base");
    } catch (err) {
        console.log("error saving product to database: " + err);
    }
}

module.exports = { getAllUsers, getSingleUser, getQR, addQR }
