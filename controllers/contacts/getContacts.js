const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({ data: contacts });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  getContacts,
};
