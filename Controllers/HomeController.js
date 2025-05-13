const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Testing - Home page working");
});

module.exports = routes;
