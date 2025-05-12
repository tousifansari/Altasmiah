const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("product")
})
routes.get("/addproduct", (req, res)=>{
    res.send("product add product")
})
routes.get("/editproduct", (req, res)=>{
    res.send("product edit product")
})


module.exports = routes;