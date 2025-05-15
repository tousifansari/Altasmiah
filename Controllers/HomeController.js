const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index', { title: 'Test Page' });
});
module.exports = routes;
