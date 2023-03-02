const router = require("express").Router();
const nodemailer = require("nodemailer");

router.get("/contact", (req, res) => {
  return res.send("request successfull");
});
router.post("/contact", (req, res) => {
  let data = req.body;
  if (!data.name.length || !data.email.length || !data.message.length) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `message from ${data.name}`,
    html: `

            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) return res.status(400).json({ msg: "An error occurred", error });
      res.status(200).json({ msg: "Thanks for reaching out to me." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
