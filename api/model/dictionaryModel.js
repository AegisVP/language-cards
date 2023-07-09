const mongoose = require("mongoose");
const { dictionaryDbSchema } = require("../schema");

module.exports = mongoose.model("dictionary", dictionaryDbSchema);
