const Joi = require("joi");

exports.checkContactData = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
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
