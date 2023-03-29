const { Contact } = require("../../models");

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, favorite } = req.body;
    const addNewContact = await Contact.create({
      name,
      email,
      phone,
      favorite,
    });
    res.status(201).json({ data: addNewContact });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  createContact,
};
