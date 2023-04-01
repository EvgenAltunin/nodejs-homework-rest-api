const { User } = require("../../models");
const jwt = require("jsonwebtoken");

// const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY;

  const user = await User.findOne({ email });

  //   const passwordCompare = bcrypt.compareSync(password, user.password);

  //   if (!user || !passwordCompare) {
  //     res.status(401).json({ message: "Email or password is wrong!" });
  //   }
    
  if (!user || !user.comparePasswords(password)) {
    return res.status(401).json({ message: "Email or password is wrong!" });
  }
  
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, {token})
  res.status(200).json({
    token,
    user: { email: user.email, subscription: user.subscription },
  });
};

module.exports = { login };
