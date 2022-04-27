const nodeMailer = require("nodemailer")
require("dotenv").config();

const sendMail = (email, code) => {
    let transporter = nodeMailer.createTransport({
        service: "Gmail",
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
        tls: {
            rejectUnauthorized: false,

        }
    });

    let mailOpt = {
        from: "netzilla178@gmail.com",
        to: email,
        subject: "test",
        text: code
    }

    transporter.sendMail(mailOpt, function (error, succ) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent");
            res
        }
    })
}

module.exports = { sendMail }