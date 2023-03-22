const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const contactsMiddleware = require("../../middlewares/contactsMiddlewares");

const router = express.Router();

router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", contactsMiddleware.checkContactData, ctrl.createContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  contactsMiddleware.checkContactData,
  ctrl.updateContact
);

router.put(
  "/:contactId/favorite",
  contactsMiddleware.checkContactStatus,
  ctrl.updateContactStatus
);

module.exports = router;
