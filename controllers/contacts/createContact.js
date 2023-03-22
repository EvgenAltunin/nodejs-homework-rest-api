const Contact = require("../../models/contactsModel");

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, favorite } = req.body;
    const body = { name, email, phone, favorite };
    const addNewContact = await Contact.create(body);
    res.status(201).json({ data: addNewContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
};
