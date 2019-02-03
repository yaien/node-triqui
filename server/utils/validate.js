const { validations, validate } = require("indicative");
const validators = require("./validators");

Object.assign(validations, validators);

const messages = {
  exists: "{{ field }} doesn't exists",
  mongo: "{{ field }} is not a valid id"
};

module.exports = rules => async (req, res, next) => {
  try {
    await validate(req.body, rules, messages);
    next();
  } catch (errors) {
    res.status(400).send({ errors });
  }
};
