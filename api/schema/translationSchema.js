const Joi = require("joi");
const mongoose = require("mongoose");

const translationDbSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
});

const addSchema = Joi.object({
  term: Joi.string().required(),
  meaning: Joi.string().required(),
});

const updSchema = Joi.object({
  term: Joi.string(),
  meaning: Joi.string(),
});

module.exports = {
  translationDbSchema,
  translationJoiSchema: {
    addSchema,
    updSchema,
  },
};
