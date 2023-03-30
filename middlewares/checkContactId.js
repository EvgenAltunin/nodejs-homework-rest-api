const mongoose = require("mongoose");

const checkContactId = (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    return res.status(400).json({ message: "Not found" });
  }

  next();
};

module.exports = checkContactId;