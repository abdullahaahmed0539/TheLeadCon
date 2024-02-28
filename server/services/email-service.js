exports.sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailjet = require("node-mailjet").apiConnect(
    process.env.MAILJET_PUBKEY,
    process.env.MAILJET_PRIKEY
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.FROM_EMAIL,
          Name: "System - The Leadcon Website",
        },
        To: [
          {
            Email: process.env.TO_EMAIL,
            Name: "Abdullah",
          },
        ],
        Subject: "You got a lead from The Leadcon's website.",
        TextPart: `Name: ${name} \n\n Email: ${email} \n\n Phone: ${phone} \n\n Message: ${message} \n\n `,
      },
    ],
  });
  request
    .then(result => {
      console.log(result.body);
      res.status(201).json({});
    })
    .catch(err => {
      console.log(err.statusCode);
      res.status(500).json({});
    });
};
