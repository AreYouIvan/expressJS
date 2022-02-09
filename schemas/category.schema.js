// dto = data transfer offer.
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
