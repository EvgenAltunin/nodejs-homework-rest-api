const express = require("express");
const contactsControler = require("../../controlers/contactsControler");
const contactsMiddleware = require("../../middlewares/contactsMiddlewares");

const router = express.Router();

router.get("/", contactsControler.getContacts);

router.get("/:contactId", contactsControler.getContactById);

router.post(
  "/",
  contactsMiddleware.checkContactData,
  contactsControler.createContact
);

router.delete("/:contactId", contactsControler.removeContact);

router.put(
  "/:contactId",
  contactsMiddleware.checkContactData,
  contactsControler.updateContact
);

module.exports = router;
