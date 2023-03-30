const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  checkContactId,
} = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contactModel");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getContacts));

router.get(
  "/:contactId",
  checkContactId,
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  validation(joiSchema),
  ctrlWrapper(ctrl.createContact)
);

router.delete(
  "/:contactId",
  checkContactId,
  ctrlWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  checkContactId,
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.put(
  "/:contactId/favorite",
  checkContactId,
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateContactStatus)
);

module.exports = router;
