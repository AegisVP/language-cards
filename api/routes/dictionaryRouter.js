const dictionaryRouter = require("express").Router();

const { dictionaryController } = require("../controller");
const { dictionaryJoiSchema } = require("../schema");
const { tryCatchWrapper } = require("../utils");
const { validationBody } = require("../middlewares");

dictionaryRouter.get("/:userId", tryCatchWrapper(dictionaryController.getDictionary));
dictionaryRouter.post("/", validationBody(dictionaryJoiSchema.addSchema), tryCatchWrapper(dictionaryController.writeDictionary));

module.exports = dictionaryRouter;
