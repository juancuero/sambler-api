const express = require("express");
const app = express();

const { config } = require("./config/index");
const publicationsApi = require("./routes/publications.js");

// body parser
app.use(express.json());

publicationsApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
