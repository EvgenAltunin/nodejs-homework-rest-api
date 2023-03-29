const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { contacts: middleware } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contactModel");

const router = express.Router();

router.get("/", middleware.ctrlWrapper(ctrl.getContacts));

router.get(
  "/:contactId",
  middleware.checkContactId,
  middleware.ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  middleware.validation(joiSchema),
  middleware.ctrlWrapper(ctrl.createContact)
);

router.delete(
  "/:contactId",
  middleware.checkContactId,
  middleware.ctrlWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  middleware.checkContactId,
  middleware.validation(joiSchema),
  middleware.ctrlWrapper(ctrl.updateContact)
);

router.put(
  "/:contactId/favorite",
  middleware.checkContactId,
  middleware.validation(statusJoiSchema),
  middleware.ctrlWrapper(ctrl.updateContactStatus)
);

module.exports = router;
