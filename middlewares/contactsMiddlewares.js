const Joi = require("joi");

exports.checkContactData = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      favorite: Joi.boolean().default(false),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const err = new Error("Missing required fields");
      err.status = 400;
      next(err);
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.checkContactStatus = (req, res, next) => {
  try {
    const schema = Joi.object({
      favorite: Joi.boolean().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      const err = new Error("Missing field favorite");
      err.status = 400;
      next(err);
    }
    next();
  } catch (error) {
    next(error);
  }
};

