const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("UV_C_and_Blue_Light_Solutions");
});

routes.get("/sport_lighting", (req, res) => {
    res.render("sport_lighting", { title: "Sports Lighting" });
  });
  
routes.get("/Services_Commercial_Lighting", (req, res) => {
  res.render("Services_Commercial_Lighting");
});

routes.get("/TurnKey_Installation", (req, res) => {
  res.render("TurnKey_Installation");
});

routes.get("/Energies", (req, res) => {
  res.render("Energies");
});

routes.get("/Distribution", (req, res) => {
  res.render("Distribution");
});

routes.get("/Photometric_Analysis", (req, res) => {
  res.render("Photometric_Analysis");
});

module.exports = routes;
