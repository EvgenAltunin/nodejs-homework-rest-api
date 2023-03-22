const Contact = require("../../models/contactsModel");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findOne({ _id: contactId });
    if (!contactById) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: contactById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContactById,
};