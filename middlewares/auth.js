const { User } = require("../models");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  const SECRET_KEY = process.env.SECRET_KEY;
  
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || bearer !== "Bearer") {
      return res.status(401).json({ message: "Not authorized!" });
    }

    req.user = user;
    next();
    
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
