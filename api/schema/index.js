const { dictionaryDbSchema, dictionaryJoiSchema } = require("./dictionarySchema");
const { translationDbSchema, translationJoiSchema } = require("./translationSchema");

module.exports = {
  translationDbSchema,
  translationJoiSchema,
  dictionaryDbSchema,
  dictionaryJoiSchema,
};
