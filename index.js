const express = require("express");
const app = express();

const { config } = require("./config/index");
const publicationsApi = require("./routes/publications.js");
const userPublicationsApi = require("./routes/userPublications.js");

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require("./utils/middleware/errorHandlers.js");

const notFoundHandler = require("./utils/middleware/notFoundHandler");

// body parser
app.use(express.json());

// routes
publicationsApi(app);
userPublicationsApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
