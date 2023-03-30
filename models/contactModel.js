const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: "user",
  // },
});

const Contact = model("Contact", contactSchema);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  // owner: Joi.string().required(),
});

const statusJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
};
