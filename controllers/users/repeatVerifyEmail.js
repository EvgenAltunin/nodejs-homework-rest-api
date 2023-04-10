const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const repeatVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Not found" });
  }

  if (user.verify === true) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed!" });
  }

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="https://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  };

  await sendEmail(mail);

  res.status(200).json();
};

module.exports = { repeatVerifyEmail };
