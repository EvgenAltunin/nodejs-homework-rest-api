const fs = require("fs/promises");
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.resolve("models", "contacts.json");

const listContacts = async () => {
  try {
    const readResult = await fs.readFile(contactsPath);
    const contacts = JSON.parse(readResult);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const readResult = await fs.readFile(contactsPath);
    const contacts = JSON.parse(readResult);
    const contactById = contacts.find((contact) => contact.id === contactId);

    if (!contactById) {
      return null;
    }
    return contactById;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(
      (contact) => contact.id === contactId.toString()
    );
    if (idx === -1) {
      return null;
    }
    const newContactsList = contacts.filter((_, index) => index !== idx);
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
    return { message: "contact deleted" };
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const { name, email, phone } = body;
    const contacts = await listContacts();
    const newContact = { id: shortid.generate(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const { name, email, phone } = body;

    const idx = contacts.findIndex(
      (contact) => contact.id === contactId.toString()
    );
    if (idx === -1) {
      return null;
    }

    const contactFound = contacts.filter((_, index) => index === idx);

    contactFound.name = name;
    contactFound.email = email;
    contactFound.phone = phone;

    contacts[idx] = contactFound;

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contactFound;
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
};
