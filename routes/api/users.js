const express = require("express");
const { users: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/userModel");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
