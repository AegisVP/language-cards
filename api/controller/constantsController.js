const { allConstants } = require("../utils");

const getConstants = async (req, res, next) => res.json(allConstants[`${req.params.reqConstant}List`]);

module.exports = { getConstants };
