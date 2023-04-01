const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const contactById = await Contact.findOne({ _id: contactId }).populate(
    "owner",
    "_id email subscription"
  );

  if (!contactById) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json({ data: contactById });
};

module.exports = {
  getContactById,
};
