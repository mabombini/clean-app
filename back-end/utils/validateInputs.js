const Joi = require('joi');

const validateInput = (schema) => (data) =>
{
    return schema.validate(data, { abortEarly: false });
}

const signUpSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(5).max(100).required(),
    password: Joi.string().min(6).max(15).required()
});

module.exports = {
    validateSignUp: validateInput(signUpSchema)
}