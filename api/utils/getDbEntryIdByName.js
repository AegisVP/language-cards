const allConstants = require("./allConstants");

const getUserIdByName = (query) => allConstants.UsersList.find((item) => item.name === query)?._id;
const getTranslationIdByTerm = (query) => allConstants.translationsList.find((item) => item.term === query)?._id;
const getTranslationIdByTranslation = (query) => allConstants.translationsList.find((item) => item.translation === query)?._id;

module.exports = {
  getUserIdByName,
  getTranslationIdByTerm,
  getTranslationIdByTranslation,
};
