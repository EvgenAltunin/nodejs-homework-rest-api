const Contact = require("../models/contactsModel");
const listContacts = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    return await Contact.findOne({ _id: contactId });
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    return await Contact.findByIdAndRemove({ _id: contactId });
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (fields) => {
  try {
    return await Contact.create(fields);
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, fields) => {
  try {
    return await Contact.findByIdAndUpdate({ _id: contactId }, fields, {
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateStatusContact = async (contactId, fields) => {
  try {
    return await Contact.findByIdAndUpdate({ _id: contactId }, fields, {
      new: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
