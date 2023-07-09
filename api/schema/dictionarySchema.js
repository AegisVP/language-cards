const Joi = require("joi");
const mongoose = require("mongoose");

const dictionaryDbSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "users",
    required: true,
  },
  translationId: {
    type: String,
    ref: "translations",
    required: true,
  },
});

const addSchema = Joi.object({
  userId: Joi.string().required(),
  translationId: Joi.string().required(),
});

module.exports = {
  dictionaryDbSchema,
  dictionaryJoiSchema: {
    addSchema,
  },
};
