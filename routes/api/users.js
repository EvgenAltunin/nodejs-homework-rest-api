const express = require("express");
const { users: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const {
  joiRegisterSchema,
  joiLoginSchema,
  joiSubscriptionUpdateSchema,
  joiRepeatVerifySchema,
} = require("../../models/userModel");

const router = express.Router();

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrentUser));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));
router.patch("/", auth, validation(joiSubscriptionUpdateSchema), ctrlWrapper(ctrl.updateSubscription));
router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post("/verify", validation(joiRepeatVerifySchema), ctrlWrapper(ctrl.repeatVerifyEmail));

module.exports = router;
