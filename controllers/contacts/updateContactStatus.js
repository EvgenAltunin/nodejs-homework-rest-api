const { Contact } = require("../../models");

const updateContactStatus = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const updateContactStatus = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  ).populate("owner", "_id email subscription");
  if (!updateContactStatus) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ data: updateContactStatus });
};

module.exports = {
  updateContactStatus,
};
