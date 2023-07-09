const { Translation } = require("../model");

const getTranslation = async (req, res) => res.json(await Translation.findById(req.params.translationId));

const writeTranslation = async (req, res) => {
  const term = req.params.term || null;
  const meaning = req.params.meaning || null;
  return res.json(await Translation.findByIdAndUpdate(req.params.translationId || null, { term, meaning }, { upsert: true }));
};

module.exports = {
  getTranslation,
  writeTranslation,
};
