const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({ message: "Email in use!" });
  }
    const newUser = await User.create({ email, password, subscription });
    newUser.password = undefined;
  res.status(201).json({ user: newUser });
};

module.exports = {register};
