const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('Home', { title: 'Test Page' });
});
module.exports = routes;
