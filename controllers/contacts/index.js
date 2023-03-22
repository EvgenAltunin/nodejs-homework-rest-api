const { getContacts } = require("./getContacts");
const { getContactById } = require("./getContactById");
const { createContact } = require("./createContact");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateContactStatus } = require("./updateContactStatus");

module.exports = {
  getContacts,
  getContactById,
  createContact,
  removeContact,
  updateContact,
  updateContactStatus,
};
