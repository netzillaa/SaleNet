const nodeMailer = require("nodemailer")
require("dotenv").config();

const sendMail = (email, code) => {
    let transporter = nodeMailer.createTransport({
        service: "Hotmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false,

        }
    });

    let mailOpt = {
        from: "netzillatest@hotmail.com",
        to: email,
        subject: "SaleNet verification code: ",
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