const { validations, validateAll } = require("indicative");
const validators = require("./validators");

Object.assign(validations, validators);

module.exports = rules => async (req, res, next) => {
    try {
        await validateAll(req.body, rules);
        next();
    } catch (errors) {
        res.status(400).send(errors);
    }
};
