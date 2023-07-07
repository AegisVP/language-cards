const express = require("express");
const morgan = require("morgan");
// const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
const path = require("path");

const { CROSS_ENV } = require("./config");
// const { usersRouter, weighingsRouter, constantsRouter } = require('./routes');
// const { authService } = require('./middlewares');
// const swaggerDocument = require('./swagger.json');
// const { heathCheck } = require('./controller');

const app = express();

/*
// Configuring CORS
const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Configuring CORS w/ Dynamic Origin
const corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins);
    });
  },
};

// Configuring CORS Asynchronously
var allowlist = ['http://example1.com', 'http://example2.com'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptionsDelegate); // callback expects two parameters: error and options
};

// cors(corsOptions)

// https://expressjs.com/en/resources/middleware/cors.html
*/

// app.use(cors());
// app.use('/ishealthy', heathCheck);

const formatsLogger = CROSS_ENV === "development" ? "dev" : "short";
app.use(morgan(formatsLogger));

// app.get('/api', (_, res) => res.redirect('/api/docs'));
// app.use('/api/docs', swaggerUi.serve);
// app.use('/api/docs', swaggerUi.setup(swaggerDocument), swaggerUi.serve);

app.use(express.json());

// app.use('/api/user', usersRouter);
// app.use('/api/weighings', [authService, weighingsRouter]);
// app.use('/api/constants', [authService, constantsRouter]);

app.get("/*", express.static("../web/build"));
app.get("*", (_, res) => res.sendFile(path.resolve("../build/web/index.html")));
app.use((_, res) => res.status(404).json({ message: "Not found" }));

app.use((err, req, res, next) => {
  console.error(`App error handler: [${err.name}] - ${err.message}`);

  if (err.name === "CastError" || err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message,
    });
  }

  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
    details: { name: err.name, message: err.message },
  });
});

module.exports = { app };
