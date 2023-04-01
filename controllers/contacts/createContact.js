const { Contact } = require("../../models");

const createContact = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body;
  const addNewContact = await Contact.create({
    name,
    email,
    phone,
    favorite,
  });
  res.status(201).json({ data: addNewContact });
};

module.exports = {
  createContact,
};
