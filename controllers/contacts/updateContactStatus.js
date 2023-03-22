const Contact = require("../../models/contactsModel");

const updateContactStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const body = { favorite };
    const updateContactStatus = await Contact.findByIdAndUpdate(
      { _id: contactId },
      body,
      {
        new: true,
      }
    );
    if (!updateContactStatus) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ data: updateContactStatus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateContactStatus,
};
