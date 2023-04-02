const { Contact } = require("../../models");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;

  const removeContactById = await Contact.findByIdAndRemove({
    _id: contactId,
    owner: _id,
  });

  if (!removeContactById) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  removeContact,
};
