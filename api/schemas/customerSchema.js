const e = require('cors');
const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string();
const lastName = joi.string();
const phone = joi.string();
const userId = joi.number().integer();
const email = joi.string().email();
const password = joi.string();

const getCustomerSchema = joi.object({
  id: id.required()
})

const updateCustomerSchema = joi.object({
  name,
  lastName,
  phone,
  userId,
})

const createCustomerSchema = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: joi.object({
    email: email.required(),
    password: password.required(),
  })
})

module.exports = {
  getCustomerSchema,
  updateCustomerSchema,
  createCustomerSchema,
}
