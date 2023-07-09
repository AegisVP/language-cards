const mongoose = require("mongoose");
const { translationDbSchema } = require("../schema");

module.export = mongoose.model("translation", translationDbSchema);
