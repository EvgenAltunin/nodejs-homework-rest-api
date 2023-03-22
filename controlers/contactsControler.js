const Contact = require("../models/contactsModel");

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ data: contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await Contact.findOne({ _id: contactId });
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
    const { name, email, phone, favorite } = req.body;
    const body = { name, email, phone, favorite };
    const addNewContact = await Contact.create(body);
    res.status(201).json({ data: addNewContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeContact = async (req, res, next) => {
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
    res.status(500).json({ message: error.message });
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, email, phone } = req.body;
    const body = { name, email, phone };
    const editContact = await Contact.findByIdAndUpdate(
      { _id: contactId },
      body,
      {
        new: true,
      }
    );

    if (!editContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ data: editContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContactStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const body = { favorite };
    const updateContactStatus = await Contact.findByIdAndUpdate(
      { _id: contactId },
      body,
      {
        new: true,
      }
    );
    if (!updateContactStatus) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ data: updateContactStatus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
