const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ data: contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await getContactById(contactId);
    if (!contactById) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: contactById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const body = { name, email, phone };
    const addNewContact = await addContact(body);
    res.status(201).json({ data: addNewContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removeContactById = await removeContact(contactId);

    if (!removeContactById) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {}
};

exports.updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const body = { name, email, phone };
    const editContact = await updateContact(contactId, body);

    if (!editContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: editContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
