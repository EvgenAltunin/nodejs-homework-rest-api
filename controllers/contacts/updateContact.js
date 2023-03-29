const { Contact } = require("../../models");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const editContact = await Contact.findByIdAndUpdate(
      { _id: contactId },
      { name, email, phone },
      {
        new: true,
      }
    );

    if (!editContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: editContact });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  updateContact,
};
