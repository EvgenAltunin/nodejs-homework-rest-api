const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  checkContactId,
  auth,
} = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contactModel");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getContacts));

router.get(
  "/:contactId",
  auth,
  checkContactId,
  ctrlWrapper(ctrl.getContactById)
);

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.createContact));

router.delete(
  "/:contactId",
  auth,
  checkContactId,
  ctrlWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  auth,
  checkContactId,
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.put(
  "/:contactId/favorite",
  auth,
  checkContactId,
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateContactStatus)
);

module.exports = router;
