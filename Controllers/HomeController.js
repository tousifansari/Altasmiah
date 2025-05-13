const express = require("express");
const routes = express.Router();

routes.get('/test', (req, res) => {
    res.render('home', { title: 'Test Page' });
});
module.exports = routes;
