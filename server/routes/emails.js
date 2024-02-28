
const router = require("express").Router();
const { sendEmail } = require("../services/email-service");


router.route("/sendEmail").post(sendEmail);


module.exports = router;