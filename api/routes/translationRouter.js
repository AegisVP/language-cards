const translationRouter = require("express").Router();

const { translationController } = require("../controller");
const { translationJoiSchema } = require("../schema");
const { tryCatchWrapper } = require("../utils");
const { validationBody } = require("../middlewares");

translationRouter.get("/:translationId", tryCatchWrapper(translationController.getTranslation));
translationRouter.patch("/:translationId", validationBody(translationJoiSchema.updSchema), tryCatchWrapper(translationController.writeTranslation));
translationRouter.post("/", validationBody(translationJoiSchema.addSchema), tryCatchWrapper(translationController.writeTranslation));

module.exports = translationRouter;
