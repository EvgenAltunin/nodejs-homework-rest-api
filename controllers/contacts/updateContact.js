const Contact = require("../../models/contactsModel");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const body = { name, email, phone };
    const editContact = await Contact.findByIdAndUpdate(
      { _id: contactId },
      body,
      {
        new: true,
      }
    );

    if (!editContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: editContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateContact,
};