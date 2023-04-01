const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const updatedSubscription = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res
    .status(200)
    .json({
      email: updatedSubscription.email,
      subscription: updatedSubscription.subscription,
    });
};

module.exports = { updateSubscription };
