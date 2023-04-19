// const bcrypt = require("bcryptjs");

const { User } = require("../../models");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const {sendEmail} = require("../../helpers");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ message: "Email in use!" });
  }

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const newUser = await User.create({
  //   email,
  //   password: hashPassword,
  //   subscription,
  // });

  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email);
  const newUser = new User({
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
  newUser.setHashPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a target="_blank" href="https://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({ user: newUser });
};

module.exports = { register };
