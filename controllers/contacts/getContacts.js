const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.status(200).json({ data: contacts });
};

module.exports = {
  getContacts,
};
