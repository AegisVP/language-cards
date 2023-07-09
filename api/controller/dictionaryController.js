const { Dictionary } = require("../model");

const getDictionary = async (req, res) => res.json((await Dictionary.find({ userId: req.params.userId })).map(({ translationId }) => translationId));

const writeDictionary = async (req, res) => res.json(await Dictionary.create({ userId: req.body.userId, translationId: req.body.translationId }));

module.exports = {
  getDictionary,
  writeDictionary,
};
