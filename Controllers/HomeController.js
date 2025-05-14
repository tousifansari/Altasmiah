const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('home', { title: 'Test Page' });
});
module.exports = routes;
