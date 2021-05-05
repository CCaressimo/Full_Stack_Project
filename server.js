const http = require("http");

const hostname = "127.0.0.1";
const port = 3600;

const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("client"));

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const morgan = require("morgan");
const logger = morgan("tiny");
app.use(logger);

const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public/css/app.js"));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API running on port ${port}`);
});