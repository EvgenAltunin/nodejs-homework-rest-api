const { Contact } = require("../../models");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removeContactById = await Contact.findByIdAndRemove({
      _id: contactId,
    });

    if (!removeContactById) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  removeContact,
};
