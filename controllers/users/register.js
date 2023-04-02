// const bcrypt = require("bcryptjs");

const { User } = require("../../models");

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

  const newUser = new User({ email, subscription });
  newUser.setHashPassword(password);
  newUser.save();

  res.status(201).json({ user: newUser });
};

module.exports = { register };
