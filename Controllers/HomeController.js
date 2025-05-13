const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("Home")
})

module.exports = routes;