const { Contact } = require("../../models");

const createContact = async (req, res, next) => {
  const { _id } = req.user;
  const { name, email, phone, favorite } = req.body;
  const addNewContact = await Contact.create({
    name,
    email,
    phone,
    favorite,
    owner: _id,
  });
  res.status(201).json({ data: addNewContact });
};

module.exports = {
  createContact,
};
