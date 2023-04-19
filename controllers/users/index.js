const { register } = require("./register");
const { login } = require("./login");
const { getCurrentUser } = require("./getCurrentUser");
const { logout } = require("./logout");
const { updateSubscription } = require("./updateSubscription");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { repeatVerifyEmail } = require("./repeatVerifyEmail");


module.exports = {
  register,
  login,
  getCurrentUser,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  repeatVerifyEmail,
};
